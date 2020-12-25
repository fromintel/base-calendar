import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { DateService } from "src/app/services/date.service";
import { Day } from "src/app/models/day";
import { Team } from "src/app/models/team";
import { UserRealm, User, UserVacationsById } from "src/app/models/user";
import { UserService } from "../../services/user.service";
import { Visible } from "src/app/models/Visible";

@Component({
  selector: "app-calendar-table",
  templateUrl: "./calendar-table.component.html",
  styleUrls: ["./calendar-table.component.css"],
})
export class CalendarTableComponent implements OnInit {
  private teams: { [key in UserRealm]?: Team } = {};

  days: Day[] = [];
  user: User[] = [];
  hiddenInfo: Visible;
  teamInfo: any;
  daysInMonth: number;
  currentDate: string;
  currentMonth: number;
  hidden: boolean = false;
  sumArray: number[];
  sumIdArray: UserVacationsById;
  getVacationsObservable: any;
  getVacationByIdObservable: any;
  constructor(
    private dateService: DateService,
    private userService: UserService,
  ) {
    this.currentMonth = parseInt(moment().format("MM")) - 1;
    this.hiddenInfo = {};
    this.daysInMonth = this.dateService.currentDate.value.daysInMonth();
    this.currentDate = this.dateService.currentDate.value
      .subtract(this.dateService.currentDate.value.date() - 1, "days")
      .format("YYYY-MM-DD");
    this.generateHeaderArray();

    this.getVacationsObservable = this.userService
      .getVacations(this.currentDate)
      .subscribe((vacationArr) => {
        this.sumArray = vacationArr;
      });
    this.getVacationByIdObservable = this.userService
      .getVacationById(this.currentDate)
      .subscribe((vacationIdArr) => {
        this.sumIdArray = vacationIdArr;
      });

    this.getVacationsObservable.unsubscribe();
    this.getVacationByIdObservable.unsubscribe();

    this.dateService.switchMonth$.subscribe((date) => {
      this.daysInMonth = date.value.daysInMonth();
      this.currentDate = date.value.format("YYYY-MM-DD");
      this.currentMonth = date.value.month();
      this.generateHeaderArray();
      this.getVacationsObservable = this.userService
        .getVacations(this.currentDate)
        .subscribe((vacationArr) => {
          this.sumArray = vacationArr;
        });

      this.getVacationByIdObservable = this.userService
        .getVacationById(this.currentDate)
        .subscribe((vacationIdArr) => {
          this.sumIdArray = vacationIdArr;
        });
      this.getVacationsObservable.unsubscribe();
      this.getVacationByIdObservable.unsubscribe();
    });
  }

  generateHeaderArray() {
    for (let index = 0; index < this.daysInMonth; index++) {
      this.days.length = this.daysInMonth;
      let curDate = moment(this.currentDate).add(index, "days").format("ddd");
      let curFullDate = moment(this.currentDate)
        .add(index, "days")
        .format("YYYY-MM-DD");
      this.days[index] = {
        date: new Date(curFullDate),
        isDayOff: curDate === "Sat" ? true : curDate === "Sun" ? true : false,
        dayOfWeek: curDate,
      };
    }
  }

  changeVisibility(someInfo: string) {
    this.hiddenInfo[someInfo] = !this.hiddenInfo[someInfo];
  }

  getDate(index) {
    return moment(this.currentDate).format("YYYY-MM") + "-" + index;
  }

  ngOnInit() {
    this.userService.getUsers().subscribe((team) => {
      for (let elem in team) {
        this.teams[team[elem].realm] = {
          realm: team[elem].realm,
          percentageOfAbsent: team[elem].percentageOfAbsent,
          members: team[elem].members,
        };
        this.hiddenInfo[team[elem].realm] = false;
      }
    });
  }

  // get teamsEntity(): Team[] {}

  // monthDaysEntity(): Day[] {}

  // generateMonth(date: Date): Month {} // should to get month

  // you can create the structure yourself too
}
