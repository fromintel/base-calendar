import { Component, OnInit } from '@angular/core';
import {DateService} from '../../services/date.service';

@Component({
  selector: 'app-month-switcher',
  templateUrl: './month-switcher.component.html',
  styleUrls: ['./month-switcher.component.css']
})
export class MonthSwitcherComponent implements OnInit {
  currentDate: Date;
  monthName: string

  constructor(private dateFormat:DateService) {
    this.currentDate = this.dateFormat.currentDate;
    this.monthName = this.dateFormat.monthName;

   }

  ngOnInit() {
    
  }
  switchMonth(direction:string){
    this.currentDate = this.dateFormat.switchMonth(direction);
    this.changeMonthOutput();
  }

  changeMonthOutput(){
    this.monthName = this.dateFormat.getMonth(this.currentDate);
  }

  // get date from service and displaying to the template

  // switchMonth(direction: number) {}

}
