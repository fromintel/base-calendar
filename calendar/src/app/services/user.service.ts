import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';
import {Team} from '../models/team';
import { teams } from '../shared/teams';

@Injectable({
  providedIn: "root",
})
export class UserService {
  // private users: Users[] = [ ...mock data ]
  teamInfo: BehaviorSubject<Team[]>;

  getUsers(): BehaviorSubject<Team[]> {
    this.teamInfo = new BehaviorSubject(teams);
    this.teamInfo.next(teams)
    return this.teamInfo;
  }
  /*getVacations(curDate:Date):Observable<number|string[]>{
    
  }*/

  // getUserById(): Observable<User>
}
