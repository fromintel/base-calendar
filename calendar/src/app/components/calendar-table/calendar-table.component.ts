import { Component, OnInit } from '@angular/core';
import {DateService} from '../../services/date.service';
import { User, UserRealm } from '../../models/user';
import { Team } from '../../models/team';
import { Day } from '../../models/day';
import { UserService } from '../../services/user.service';
import { setDate } from 'date-fns'


@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css'],
})
export class CalendarTableComponent implements OnInit {
  currentDate: Date;
  daysArray: Day[];
  private userList: Array<User>;
  private teams: Array<Team>;



  constructor(private dateFormat:DateService, private _userService: UserService) { 
    this.currentDate = new Date();
    this.daysArray = [];
  }


  ngOnInit() {
    this._userService.getUsers().subscribe((value) => { //вынести в отдельную функцию
      this.userList = value;
    });
    this.setTeams();
    this.dateFormat.dateSubj.subscribe((value) => { //вынести в отдельную функцию
      console.log(value);
      this.currentDate = value;
      this.daysArray = this.setDaysInArray();
    });
    console.log(this.daysArray);
  }

  ngOnDestroy():void{
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

  setTeamMembers(): void{
    for(let key in this.teams){
      for(let userKey in this.userList){
        if(this.teams[key].realm === this.userList[userKey].realm){
          this.teams[key].participants.push(this.userList[userKey]);
        }
      }
    }
  }

  setDaysInArray(): Day[]{
    let monthDays = [];
    for(let i = 1; i <= this.dateFormat.getDaysInMonth(); i++){
      let day: Day = {
        date: setDate(this.currentDate, i),
        isDayOff: false
      };
      monthDays.push(day);
    }
    return monthDays;
  }

}
