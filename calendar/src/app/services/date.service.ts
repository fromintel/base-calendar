import { Injectable } from "@angular/core";
import * as moment from "moment";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class DateService {
  currentDate: BehaviorSubject<moment.Moment> = new BehaviorSubject(moment());
    // date: some Subject (or BehaviorSubject<Date>)

    switchMonth(direction: number) {
      const value = this.currentDate.value.add(direction, 'month');
    }
}

