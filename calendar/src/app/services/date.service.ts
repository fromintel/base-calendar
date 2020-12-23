import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DateService {
  switchMonth$:Observable<any>;
  private switchSubject = new Subject<any>();
  constructor() {
    this.switchMonth$ = this.switchSubject.asObservable();
  }

  currentDate: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());
    // date: some Subject (or BehaviorSubject<Date>)
    switchMonth(direction: number) {
      this.currentDate.value.add(direction, 'month');
      this.switchSubject.next(this.currentDate);
    }
}

