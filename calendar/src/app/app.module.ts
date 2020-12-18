import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { BaseLayoutComponent } from './components/base-layout/base-layout.component';
import { CalendarTableComponent } from './components/calendar-table/calendar-table.component';
import { MonthSwitcherComponent } from './components/month-switcher/month-switcher.component';
import { MomentPipe } from './services/moment.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    BaseLayoutComponent,
    CalendarTableComponent,
    MonthSwitcherComponent,
    MomentPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
