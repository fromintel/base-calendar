import { Component, OnInit } from '@angular/core';
import {DateService} from '../../services/date.service';
import { User, UserRealm } from '../../models/user';
import { Team } from '../../models/team';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css'],
})
export class CalendarTableComponent implements OnInit {
  Arr=Array; // переделать!
  currentDate: Date;
  daysAmount: number;
  private userList: Array<User>;
  private teams: Array<Team>;



  constructor(private dateFormat:DateService, private _userService: UserService) { 
    this.currentDate = new Date();
    this.daysAmount = this.dateFormat.getDaysAmount();
  
  }

  getDayName(dayIndex:number):string{
    return this.dateFormat.getDayName(dayIndex);
  }
  getDaysAmount(){
    return this.dateFormat.getDaysAmount();
  }


  ngOnInit() {
    this._userService.getUsers().subscribe((value) => {
      this.userList = value;
    });
    this.setTeams();
  }


  setTeams():void{
    this.teams = [];
    for(let key in UserRealm){
      this.teams.push({
        realm: <UserRealm>key,
        participants: []
      });
    }
    this.setTeamMembers();
  }

  setTeamMembers(){
    for(let key in this.teams){
      for(let userKey in this.userList){
        if(this.teams[key].realm === this.userList[userKey].realm){
          this.teams[key].participants.push(this.userList[userKey]);
        }
      }
    }
  }

  
  ngOnDestroy():void{
  }

}
