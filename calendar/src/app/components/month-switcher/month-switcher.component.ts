import { Component, OnInit } from '@angular/core';
import { DateService } from '../../services/date.service';
import { format } from 'date-fns'

@Component({
  selector: 'app-month-switcher',
  templateUrl: './month-switcher.component.html',
  styleUrls: ['./month-switcher.component.css']
})
export class MonthSwitcherComponent implements OnInit {
  currentDate: Date;
  monthName: string
  

  constructor(private dateFormat:DateService) {
    this.currentDate = new Date();
    this.monthName = format(this.currentDate, 'LLLL');
  }

  ngOnInit() {
    this.dateFormat.dateSubj.subscribe((value) => {
      this.currentDate = value;
    });
  }

  private setMonthName():void {
    this.monthName = format(this.currentDate, 'LLLL');
  }



  switchMonth(direction: number): void{
    this.dateFormat.changeCurrentDate(direction);
    this.setMonthName();
  }

}
