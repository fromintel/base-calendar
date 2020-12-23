import { Component, Input, OnInit } from "@angular/core";
import * as moment from "moment";
import { DateService } from "src/app/services/date.service";
import { Day } from "src/app/models/day";
import { Team } from "src/app/models/team";
import { UserRealm, User } from "src/app/models/user";
import { UserService } from "../../services/user.service";
import { Subscription } from "rxjs";
import { Visible } from "src/app/models/Visible";

@Component({
  selector: "app-calendar-table",
  templateUrl: "./calendar-table.component.html",
  styleUrls: ["./calendar-table.component.css"],
})
export class CalendarTableComponent implements OnInit {
  private teams: { [key in UserRealm]?: Team } = {};

  //@Input() currentDate: moment.Moment
  days: Day[] = [];
  user: User[] = [];
  hiddenInfo:Visible;
  teamInfo: any;
  daysInMonth: number;
  currentDate: string;
  currentMonth: string;
  hidden: boolean = false;
  sumArray:number|string[];
  //daysInMonth:number = moment(this.currentDate, "YYYY-MM").daysInMonth();
  constructor(
    private dateService: DateService,
    private userService: UserService,
  ) {
    this.hiddenInfo ={};
    this.getDaysInMonth();
    this.getCurrentMonth();
    this.getCurrentDate();
    this.generateHeaderArray();
  }

  generateHeaderArray(): void {
    for (let index = 0; index < this.daysInMonth; index++) {
      this.days.length = this.daysInMonth;
      let curDate = moment(this.currentDate).add(index, "days").format("ddd");
      let curFullDate = moment(this.currentDate)
        .add(index, "days")
        .format("DD-MM-YYYY");
      this.days[index] = {
        date: new Date(curFullDate),
        isDayOff: curDate === "Sat" ? true : curDate === "Sun" ? true : false,
        dayOfWeek: curDate,
      };
    }
  }
  getDaysInMonth():number {
    return this.daysInMonth = this.dateService.currentDate.value.daysInMonth();
  }

  getCurrentMonth(): string {
    return this.currentMonth = this.dateService.currentDate.value
    .subtract(this.dateService.currentDate.value.date(), "month")
    .format("M");
  }
  getCurrentDate(): string {
    return this.currentDate = this.dateService.currentDate.value
    .subtract(this.dateService.currentDate.value.date() - 1, "days")
    .format("DD-MM-YYYY");
  }
  changeVisibility(someInfo:string): void{
    this.hiddenInfo[someInfo]= !this.hiddenInfo[someInfo];
  }


  ngOnInit() {
    // you need to get users
    // then construct your team by getting users, such as
    this.dateService.switchMonth$.subscribe((date) => {
      this.daysInMonth = date.value.daysInMonth();
      this.currentMonth = (date.value.format("M"));
      this.currentDate = date.value.format("DD-MM-YYYY");
      this.generateHeaderArray();
    });

    this.userService
      .getUsers()
      .subscribe((team) => {
        // console.log(team);
        for (let elem in team) {
          this.teams[team[elem].realm] = {
            realm: team[elem].realm,
            percentageOfAbsent: team[elem].percentageOfAbsent,
            members: team[elem].members,
          };
          this.hiddenInfo[team[elem].realm] = false;
        }
        
        //console.log(this.hiddenInfo);
      });

    //and then add users to teams, such as
    /*
    * if (user.realm in this.teams) {
        this.teams[user.realm].participants.push(user);
      }
    * */
    // for now you should be have a teams
  }

  // get teamsEntity(): Team[] {}

  // monthDaysEntity(): Day[] {}

  // generateMonth(date: Date): Month {} // should to get month

  // you can create the structure yourself too
}
// get isVacation() {
//   const cellDate = this.date.toISOString();
//   for (const vacationItem of this.vacation) {
//     const vacationItemEntries = [...vacationItem.availableDatesList];
//     const vacationUiStart = vacationItemEntries[0];
//     const vacationUiEnd = vacationItemEntries[vacationItemEntries.length - 1];
//     if (vacationItem.availableDatesList.has(cellDate)) {
//       if (!this.isWeekend) {
//         this.increaseVacationSum();
//       }
//       if (cellDate === vacationUiStart) {
//         this.component.className += " vacation-cell_ui-start";
//       }
//       if (cellDate === vacationUiEnd) {
//         this.component.className += " vacation-cell_ui-end";
//       }
//       return { type: vacationItem.type };
//     }
//   }
//   return false;
// }
