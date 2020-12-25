import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { UserRealm, UserVacationsById } from "../models/user";
import { Team } from "../models/team";
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class UserService {
  teamInfo: BehaviorSubject<Team[]>;
  vacationInfo: BehaviorSubject<number[]>;
  vacationInfoById: BehaviorSubject<UserVacationsById>;
  private dayArr: number[] = [];
  vacations: UserVacationsById;
  private teams: Team[] = [
    {
      realm: UserRealm.FRONT_END,
      percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
      members: [
        {
          id: 1,
          name: "FE_Team_User1",
          email: "FE_Team_User1@mail.com",
          role: "FE_User1",
          realm: UserRealm.FRONT_END,
          vacations: [
            { startDate: "2020-11-25", endDate: "2020-12-01", type: "UnPaid" },
            { startDate: "2020-12-31", endDate: "2021-01-05", type: "Paid" },
          ],
        },
        {
          id: 2,
          name: "FE_Team_User2",
          email: "FE_Team_User2@mail.com",
          role: "FE_User1",
          realm: UserRealm.FRONT_END,
          vacations: [
            { startDate: "2020-11-30", endDate: "2020-12-04", type: "UnPaid" },
            { startDate: "2020-03-20", endDate: "2020-03-22", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      realm: UserRealm.DESIGNER,
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          id: 11,
          name: "Des_Team_User1",
          email: "Des_Team_User1@mail.com",
          role: "Des_User2",
          realm: UserRealm.DESIGNER,
          vacations: [
            { startDate: "2020-12-02", endDate: "2020-12-03", type: "Paid" },
            { startDate: "2021-02-05", endDate: "2021-02-15", type: "Paid" },
          ],
        },
        {
          id: 12,
          name: "Des_Team_User2",
          email: "Des_Team_User2@mail.com",
          role: "Des_User2",
          realm: UserRealm.DESIGNER,
          vacations: [
            { startDate: "2020-12-08", endDate: "2020-12-21", type: "UnPaid" },
            { startDate: "2021-02-20", endDate: "2021-02-22", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      realm: UserRealm.BACK_END,
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          id: 21,
          name: "BE_Team_User1",
          email: "BE_Team_User1@mail.com",
          role: "BE_User3",
          realm: UserRealm.BACK_END,
          vacations: [
            { startDate: "2020-12-10", endDate: "2020-12-15", type: "Paid" },
            { startDate: "2021-02-05", endDate: "2021-02-15", type: "Paid" },
          ],
        },
        {
          id: 22,
          name: "BE_Team_User2",
          email: "BE_Team_User2@mail.com",
          role: "BE_User3",
          realm: UserRealm.BACK_END,
          vacations: [
            { startDate: "2020-02-01", endDate: "2020-02-10", type: "Paid" },
            { startDate: "2021-02-20", endDate: "2021-02-22", type: "UnPaid" },
          ],
        },
      ],
    },
    {
      realm: UserRealm.MANAGER,
      percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
      members: [
        {
          id: 31,
          name: "Man_Team_User1",
          email: "Man_Team_User1@mail.com",
          role: "Man_User4",
          realm: UserRealm.MANAGER,
          vacations: [
            { startDate: "2020-12-15", endDate: "2020-12-30", type: "UnPaid" },
            { startDate: "2021-02-05", endDate: "2021-02-15", type: "Paid" },
          ],
        },
        {
          id: 32,
          name: "Man_Team_User2",
          email: "Man_Team_User2@mail.com",
          role: "Man_User4",
          realm: UserRealm.MANAGER,
          vacations: [
            { startDate: "2020-02-01", endDate: "2020-02-10", type: "Paid" },
            { startDate: "2021-02-20", endDate: "2021-02-22", type: "UnPaid" },
          ],
        },
      ],
    },
  ];

  getUsers(): BehaviorSubject<Team[]> {
    this.teamInfo = new BehaviorSubject(this.teams);
    this.teamInfo.next(this.teams);
    return this.teamInfo;
  }

  getVacations(curDate: string): BehaviorSubject<number[]> {
    let curr: moment.Moment = moment(curDate);
    this.dayArr.length = curr.daysInMonth();
    this.dayArr.fill(0);
    for (let day = 0; day < curr.daysInMonth(); day++) {
      curr = moment(curDate);
      if (curr.add(day, "days").format("ddd") == "Sat") {
        this.dayArr[day] = -1;
        if (typeof this.dayArr[day + 1] !== "undefined") {
          this.dayArr[day + 1] = -1;
        }
        curr = moment(curDate);
      }
    }
    curr = moment(curDate);
    for (let team of this.teams) {
      for (let member of team.members) {
        for (let vacation of member.vacations) {
          let start: moment.Moment = moment(vacation.startDate);
          let end: moment.Moment = moment(vacation.endDate);
          if (
            start.month() <= curr.month() &&
            end.month() >= curr.month() &&
            start.year() <= curr.year() &&
            end.year() >= curr.year()
          ) {
            if (start.month() < curr.month() || start.year() < curr.year()) {
              start = moment(`${curr.year()}-${curr.month() + 1}-01`);
            }
            if (end.month() > curr.month() || end.year() > curr.year()) {
              end = moment(
                `${curr.year()}-${curr.month() + 1}-${curr.daysInMonth()}`,
              );
            }
            for (let day = 0; day < curr.daysInMonth(); day++) {
              curr = moment(curDate);
              if (
                curr.add(day, "days") <= end &&
                curr.add(day, "days") >= start
              ) {
                curr = moment(curDate);
                if (this.dayArr[day] != -1) {
                  this.dayArr[day] += 1;
                }
              }
            }
          }
        }
      }
    }
    this.vacationInfo = new BehaviorSubject(this.dayArr);
    this.vacationInfo.next(this.dayArr);
    return this.vacationInfo;
  }

  getVacationById(curDate: string): BehaviorSubject<UserVacationsById> {
    this.vacations = {};
    let curr = moment(curDate);
    for (let team of this.teams) {
      for (let member of team.members) {
        let id: number = member.id;
        let sumVacations: number = 0;
        for (let vacation of member.vacations) {
          let start: moment.Moment = moment(vacation.startDate);
          let end: moment.Moment = moment(vacation.endDate);
          if (
            start.month() <= curr.month() &&
            end.month() >= curr.month() &&
            start.year() <= curr.year() &&
            end.year() >= curr.year()
          ) {
            if (start.month() < curr.month() || start.year() < curr.year()) {
              start = moment(`${curr.year()}-${curr.month() + 1}-01`);
            }
            if (end.month() > curr.month() || end.year() > curr.year()) {
              end = moment(
                `${curr.year()}-${curr.month() + 1}-${curr.daysInMonth()}`,
              );
            }
            sumVacations += end.date() - start.date();
          }
        }
        this.vacations[id] = sumVacations;
      }
    }
    this.vacationInfoById = new BehaviorSubject(this.vacations);
    this.vacationInfoById.next(this.vacations);
    return this.vacationInfoById;
  }
}
