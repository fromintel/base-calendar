// modules
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MaterialModule } from "./material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";

// components
import { AppComponent } from "./app.component";
import { BaseLayoutComponent } from "./components/base-layout/base-layout.component";
import { CalendarTableComponent } from "./components/calendar-table/calendar-table.component";
import { ActionBarComponent } from "./components/action-bar/action-bar.component";
import { MonthSwitcherComponent } from "./components/month-switcher/month-switcher.component";
import { CalendarFooterComponent } from "./components/calendar-footer/calendar-footer.component";
import { ModalComponent } from "./components/modal/modal.component";

// services
import { MomentPipe } from "./services/moment.pipe";
import { DateService } from "./services/date.service";
import { UserService } from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    BaseLayoutComponent,
    CalendarTableComponent,
    MonthSwitcherComponent,
    MomentPipe,
    CalendarFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [DateService, UserService],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {}
