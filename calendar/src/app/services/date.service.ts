import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject, Subject } from 'rxjs';
import { add } from 'date-fns';
import { getDaysInMonth } from 'date-fns'
import { format } from 'date-fns'
import { Day } from '../models/day';
import { setDate } from 'date-fns'




@Injectable({
  providedIn: 'root'
})
export class DateService {

  currentDate:Date;
  public dateSubj: BehaviorSubject<Date> = new BehaviorSubject<Date>(new Date());

  constructor() {
    this.currentDate = new Date();
    // this.initDateSubj(this.currentDate);
    // this.monthName = this.getMonth(this.currentDate);
    // this.daysAmount = this.getDaysAmount();
  }

  // initDateSubj(date: Date): void{
  //   this.dateSubj.next(date);
  // }

  getCurrentDate(): Observable<Date>{
    return this.dateSubj.asObservable();
  }

  changeCurrentDate(direction: number):void {
    this.currentDate = add(this.currentDate, {
      months: direction
    });
    this.dateSubj.next(this.currentDate);
  }

  getDaysInMonth():number{
    return getDaysInMonth(this.currentDate);
  }

  getDayName(date): string{
    return format(date, 'EE');
  }

  getDayNumber(date): string{
    return format(date, 'd');
  }













 
//  getMonth(date: Date):string{
//   switch (date.getMonth()) {
//     case 0:
//       return "January"
//       break;
//     case 1:
//       return "February"
//       break;
//     case 2:
//       return "March"
//       break;
//     case 3:
//       return "April"
//       break;
//     case 4:
//       return "May"
//       break;
//       case 5:
//         return "June"
//         break;
//       case 6:
//           return "Jule"
//           break;
//       case 7:
//           return "August"
//           break;
//      case 8:
//             return "September"
//             break;
//      case 9:
//               return "October"
//               break;
//     case 10:
//                 return "November"
//                 break;
//     case 11:
//       return "December"
//       break;

//     default:
//       return "Invalid Month"
//       break;
//   }
//  }
//  getDayName(dayIndex:number):string{
//   let tempDate:number = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth(),dayIndex).getDay();
//   switch (tempDate) {
//     case 0:
//       return "St"
//       break;
//     case 1:
//       return "Mn"
//       break;
//     case 2:
//       return "Tu"
//       break;
//     case 3:
//       return "Wd"
//       break;
//     case 4:
//       return "Th"
//       break;
//     case 5:
//       return "Fr"
//       break;
//     case 6:
//       return "Sn"
//       break;
//     default:
//       return "ERR"
//       break;
//   }
//  }
//  getDaysAmount(){
//   return new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1,0).getDate();
//  }

//  switchMonth(direction:string):Date{
//   if (direction == "1"){
//     this.currentDate = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()+1);
//   }
//   if (direction == "-1"){
//     this.currentDate = new Date(this.currentDate.getFullYear(),this.currentDate.getMonth()-1);
//   }
//   return this.currentDate;
//  }

}
