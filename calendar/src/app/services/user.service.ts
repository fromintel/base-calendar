import { Observable } from 'rxjs';
import {ITeams} from '../models/IDepartment-teams';
import {User, UserRealm} from '../models/user'

export class UserService {
  // private users: Users[] = [ ...mock data ]

  public teams: ITeams[] = [
      {
        name: "Frontend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 22, 2, 2, 2, 2, 11, 1],
        members: [
          {
            id: 1,
            name: "FE_Team_User1",
            email: "FE_Team_User1@mail.com",
            role: "FE_User1",
            realm: UserRealm.FRONT_END,
            vacations: [
              { startDate: "25.11.2020", endDate: "01.12.2020", type: "UnPaid" },
              { startDate: "31.12.2020", endDate: "05.01.2021", type: "Paid" },
            ],
          },
          {
            id: 1,
            name: "FE_Team_User2",
            email: "FE_Team_User2@mail.com",
            role: "FE_User1",
            realm: UserRealm.FRONT_END,
            vacations: [
              { startDate: "30.11.2020", endDate: "04.12.2020", type: "UnPaid" },
              { startDate: "20.03.2020", endDate: "22.03.2020", type: "UnPaid" },
            ],
          },
        ],
      },
      {
        name: "Design Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            id: 11,
            name: "Des_Team_User1",
            email: "Des_Team_User1@mail.com",
            role: "Des_User2",
            realm: UserRealm.DESIGNER,
            vacations: [
              { startDate: "02.12.2020", endDate: "03.12.2020", type: "Paid" },
              { startDate: "05.02.2021", endDate: "15.02.2021", type: "Paid" },
            ],
          },
          {
            id: 12,
            name: "Des_Team_User2",
            email: "Des_Team_User2@mail.com",
            role: "Des_User2",
            realm: UserRealm.DESIGNER,
            vacations: [
              { startDate: "08.12.2020", endDate: "21.12.2020", type: "UnPaid" },
              { startDate: "20.02.2021", endDate: "22.02.2021", type: "UnPaid" },
            ],
          },
        ],
      },
      {
        name: "Backend Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            id: 21,
            name: "BE_Team_User1",
            email: "BE_Team_User1@mail.com",
            role: "BE_User3",
            realm: UserRealm.BACK_END,
            vacations: [
              { startDate: "10.12.2020", endDate: "15.12.2020", type: "Paid" },
              { startDate: "05.02.2021", endDate: "15.02.2021", type: "Paid" },
            ],
          },
          {
            id: 22,
            name: "BE_Team_User2",
            email: "BE_Team_User2@mail.com",
            role: "BE_User3",
            realm: UserRealm.BACK_END,
            vacations: [
              { startDate: "01.02.2020", endDate: "10.02.2020", type: "Paid" },
              { startDate: "20.02.2021", endDate: "22.02.2021", type: "UnPaid" },
            ],
          },
        ],
      },
      {
        name: "Managers Team",
        percentageOfAbsent: [0, 2, 0, 0, 1, 2, 2, 2, 2, 2, 1, 1],
        members: [
          {
            id: 31,
            name: "Man_Team_User1",
            email: "Man_Team_User1@mail.com",
            role: "Man_User4",
            realm: UserRealm.MANAGER,
            vacations: [
              { startDate: "15.12.2020", endDate: "30.12.2020", type: "UnPaid" },
              { startDate: "05.02.2021", endDate: "15.02.2021", type: "Paid" },
            ],
          },
          {
            id: 31,
            name: "Man_Team_User2",
            email: "Man_Team_User2@mail.com",
            role: "Man_User4",
            realm: UserRealm.MANAGER,
            vacations: [
              { startDate: "01.02.2020", endDate: "10.02.2020", type: "Paid" },
              { startDate: "20.02.2021", endDate: "22.02.2021", type: "UnPaid" },
            ],
          },
        ],
      },
    ]

  // getUsers(): Observable<User[]> {}

  // getUserById(): Observable<User>
}
