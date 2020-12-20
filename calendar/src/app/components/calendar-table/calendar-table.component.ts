import { Component, Input, OnInit } from "@angular/core";
import * as moment from "moment";
import { DateService } from "src/app/services/date.service";
import { Day } from "src/app/models/day";
import { Team } from "src/app/models/team";
import { UserRealm, User } from "src/app/models/user";
import { UserService } from "../../services/user.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-calendar-table",
  templateUrl: "./calendar-table.component.html",
  styleUrls: ["./calendar-table.component.css"],
})
export class CalendarTableComponent implements OnInit {
  private teams: { [key in UserRealm]?: Team } = {};

  //@Input() currentDate: moment.Moment
  days: Day[] = [];
  teamInfo: any;
  daysInMonth: number;
  currentDate: string;
  //daysInMonth:number = moment(this.currentDate, "YYYY-MM").daysInMonth();
  constructor(
    private dateService: DateService,
    private userService: UserService,
  ) {
    this.daysInMonth = this.dateService.currentDate.value.daysInMonth();
    this.currentDate = this.dateService.currentDate.value
      .subtract(this.dateService.currentDate.value.date() - 1, "days")
      .format("YYYY-MM-DD");
    this.generateHeaderArray();
    this.dateService.switchMonth$.subscribe((date) => {
      this.daysInMonth = date.value.daysInMonth();
      this.currentDate = date.value.format("YYYY-MM-DD");
      this.generateHeaderArray();
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

  ngOnInit() {
    // you need to get users
    const subTeamInfo: Subscription = this.userService
      .getUsers()
      .subscribe((team) => {
        this.teams = {

        };
        console.log(team[0].realm);
        console.log(team[0].members);
        console.log(team[0].percentageOfAbsent);
      });

    // then construct your team by getting users, such as

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
