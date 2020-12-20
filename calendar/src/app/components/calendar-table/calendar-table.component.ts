import { Component, OnInit } from '@angular/core';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-calendar-table',
  templateUrl: './calendar-table.component.html',
  styleUrls: ['./calendar-table.component.css']
})
export class CalendarTableComponent implements OnInit {
  Arr=Array;
  currentDate: Date;
  daysAmount: number;

  // private teams: { [key in UserRealm]?: Team } = {};

  constructor(private dateFormat:DateService) { 
    this.currentDate = new Date();
    this.daysAmount = this.dateFormat.getDaysAmount();
  }
  changeDate(){

  }
  getDayName(dayIndex:number):string{
    return this.dateFormat.getDayName(dayIndex);
  }
  getDaysAmount(){
    return this.dateFormat.getDaysAmount();
  }

  ngOnInit() {
    // you need to get users
    // then construct your team by getting users, such as
    /*
    * this.teams[user.realm] = {
          realm: user.realm,
          participants: []
        };
    * */
    // and then add users to teams, such as
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
  ngOnDestroy():void{
  }

}
