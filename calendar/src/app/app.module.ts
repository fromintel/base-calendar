import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ActionBarComponent } from "./components/action-bar/action-bar.component";
import { BaseLayoutComponent } from "./components/base-layout/base-layout.component";
import { CalendarTableComponent } from "./components/calendar-table/calendar-table.component";
import { MonthSwitcherComponent } from "./components/month-switcher/month-switcher.component";
import { MomentPipe } from "./services/moment.pipe";
import { CalendarFooterComponent } from "./components/calendar-footer/calendar-footer.component";
import { ModalComponent } from "./components/modal/modal.component";
import { MaterialModule } from "./material/material.module";
import { BrowserAnimationsModule} from "@angular/platform-browser/animations"


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
    MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModalComponent],
})
export class AppModule {}
