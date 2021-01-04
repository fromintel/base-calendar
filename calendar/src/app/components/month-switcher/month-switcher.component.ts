import { Component, EventEmitter, Output } from "@angular/core";
import { DateService } from "../../services/date.service";

@Component({
  selector: "app-month-switcher",
  templateUrl: "./month-switcher.component.html",
  styleUrls: ["./month-switcher.component.css"],
})
export class MonthSwitcherComponent {
  //@Output() onMonthChange: EventEmitter<moment.Moment> = new EventEmitter<moment.Moment>()
  constructor(private dateService: DateService) {}

  // get date from service and displaying to the template

  switchMonth(direction: number) {
    this.dateService.switchMonth(direction);
    //this.onMonthChange.emit(this.dateService.currentDate.value);
  }
}
