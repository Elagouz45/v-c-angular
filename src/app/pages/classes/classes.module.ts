import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {ClassesComponent} from './classes.component';
import {WidgetsModule} from '../../_metronic/partials';
import {LayoutModule} from "../../_metronic/layout";
import {CalendarComponent} from "./componenss/calendar/calendar.component";
import {FormsModule} from "@angular/forms";
import {FlatpickrModule} from "angularx-flatpickr";
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import {AddClassComponent} from "./componenss/add-class/add-class.component";
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelect2Module } from 'ng-select2';
@NgModule({
  declarations: [ClassesComponent, CalendarComponent , AddClassComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    LayoutModule,
    FormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    RouterModule.forChild([
      {
        path: 'all',
        component: ClassesComponent,
      },
    ]),
    NgSelect2Module,
    NgSelectModule
  ],
})
export class ClassesModule {
}
