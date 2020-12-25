import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserRealm } from '../models/user';


@Injectable({
  providedIn: 'root',
})

export class UserService {
  private users: User[] = [
    {
      id: 1,
      name: 'FE_User_1',
      email: 'someemail.com',
      role: 'dev',
      realm: UserRealm.FRONT_END 
    },
    {
      id: 2,
      name: 'FE_User_2',
      email: 'someemail.com',
      role: 'dev',
      realm: UserRealm.FRONT_END 
    },
    {
      id: 3,
      name: 'FE_User_3',
      email: 'someemail.com',
      role: 'dev',
      realm: UserRealm.FRONT_END 
    },
    {
      id: 4,
      name: 'BA_User_1',
      email: 'someemail.com',
      role: 'dev',
      realm: UserRealm.BACK_END
    },
    {
      id: 5,
      name: 'BA_User_2',
      email: 'someemail.com',
      role: 'dev',
      realm: UserRealm.BACK_END
    },
    {
      id: 6,
      name: 'DS_User_1',
      email: 'someemail.com',
      role: 'dev',
      realm: UserRealm.DESIGNER 
    },

  ];

  getUsers(): Observable<User[]> {

    // return new Observable(obs => {
    //   return obs.next();
      
    // });

    return new Observable(sub => {
        sub.next(this.users);
      });
  }

  // getUserById(): Observable<User>{

  //   return;
  // }

  
}
