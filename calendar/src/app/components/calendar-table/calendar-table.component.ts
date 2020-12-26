import { Component, OnInit } from "@angular/core";
import * as moment from "moment";
import { DateService } from "src/app/services/date.service";
import { Day } from "src/app/models/day";
import { Team } from "src/app/models/team";
import { UserRealm, User, UserVacationsById } from "src/app/models/user";
import { UserService } from "../../services/user.service";
import { Visible } from "src/app/models/Visible";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ModalComponent } from "../modal/modal.component";

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
    private dialog: MatDialog,
  ) {
    this.currentMonth = parseInt(moment().format("MM")) - 1;
    this.hiddenInfo = {};
    this.daysInMonth = this.dateService.currentDate.value.daysInMonth();
    this.currentDate = this.dateService.currentDate.value
      .subtract(this.dateService.currentDate.value.date() - 1, "days")
      .format("YYYY-MM-DD");
    this.generateHeaderArray();
    // get vacation for a member
    this.getVacationsObservable = this.userService
      .getVacations(this.currentDate)
      .subscribe((vacationArr) => {
        this.sumArray = vacationArr;
      });
    // get vacation for a day
    this.getVacationByIdObservable = this.userService
      .getVacationById(this.currentDate)
      .subscribe((vacationIdArr) => {
        this.sumIdArray = vacationIdArr;
      });

    this.getVacationsObservable.unsubscribe();
    this.getVacationByIdObservable.unsubscribe();
    // watch month change
    this.dateService.switchMonth$.subscribe((date) => {
      this.daysInMonth = date.value.daysInMonth();
      this.currentDate = date.value.format("YYYY-MM-DD");
      this.currentMonth = date.value.month();
      this.generateHeaderArray();
      // subscribe user vacation and make day-vacation sum
      this.getVacationsObservable = this.userService
        .getVacations(this.currentDate)
        .subscribe((vacationArr) => {
          this.sumArray = vacationArr;
        });
        // subscribe user vacation and make member-vacation sum
      this.getVacationByIdObservable = this.userService
        .getVacationById(this.currentDate)
        .subscribe((vacationIdArr) => {
          this.sumIdArray = vacationIdArr;
        });
      this.getVacationsObservable.unsubscribe();
      this.getVacationByIdObservable.unsubscribe();
    });
  }
  // generation of head tr with weekdays 
  generateHeaderArray(): void {
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
  // hide members
  changeVisibility(someInfo: string): void {
    this.hiddenInfo[someInfo] = !this.hiddenInfo[someInfo];
  }
  // date for percentage
  getDate(index: number): string{
    return moment(this.currentDate).format("YYYY-MM") + "-" + index;
  }

  ngOnInit() {
    // get teams objects and add flag for hiding
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

// modal window
  onShow(): void {
    const dialogConfig: MatDialogConfig<any> = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "417px";
    dialogConfig.height = "397px";
    dialogConfig.hasBackdrop = false;
    this.dialog.open(ModalComponent, dialogConfig)
  }
}
