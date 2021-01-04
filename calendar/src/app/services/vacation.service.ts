// /* export class VacationService {
//   // private vacations: Vacation[] = [ ...mock data ]

//   // getVacations(): Observable<Vacation[]> {}

//   // getVacationById(): Observable<Vacation>
// } */
// // export class VacationService {
// //   private vacations: Vacation[] = [ ...mock data ]

// //   getVacations(): Observable<Vacation[]> {}

// //   getVacationById(): Observable<Vacation>
// // }
// import { Injectable } from "@angular/core";
// import { BehaviorSubject } from "rxjs";
// import { Vacation } from "../models/vacation";
// import { teams } from "../shared/teams";
// import { UserService } from "../services/user.service";
// import { Team } from "src/app/models/team";
// import { UserRealm, User } from "src/app/models/user";
// import * as moment from 'moment';

// @Injectable({
//   providedIn: "root",
// })
// export class VacationService {
//   private teams: { [key in UserRealm]?: Team } = {};
//   private vacations: { [key: string]: string | number };
//   private members: User[];
//   private dayArr: number[] = [];
//   vacationInfo: BehaviorSubject<number[]>;

//   constructor(private userService: UserService) {
//     this.userService.getUsers().subscribe((team) => {
//       // console.log(team);
//       for (let elem in team) {
//         this.members = team[elem].members;
//         for (let member in this.members) {
//           this.vacations = {
//             startDate: this.members[member].vacations[member].startDate,
//             endDate: this.members[member].vacations[member].endDate,
//             type: this.members[member].vacations[member].type,
//             userId: this.members[member].id,
//           };
//           console.log(this.vacations);
//         }
//       }
//     });
//   }

//   getVacations(vocations): BehaviorSubject<Vacation[]>{
//     for() {

//     }
//   }
// }

//           this.vacations = {
//             startDate: this.members[member].vacations[member].startDate,
//             endDate: this.members[member].vacations[member].endDate,
//             type: this.members[member].vacations[member].type,
//             userId: this.members[member].id,
//           };
