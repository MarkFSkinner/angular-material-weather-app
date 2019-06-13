import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { CurrentComponent } from './current/current.component';
import { ExtendedComponent } from './extended/extended.component';
import { HourlyComponent } from './hourly/hourly.component';

@NgModule({
  declarations: [CurrentComponent, ExtendedComponent, HourlyComponent],
  imports: [
    CommonModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
