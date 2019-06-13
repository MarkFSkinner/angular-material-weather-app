import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './current/current.component';
import { ExtendedComponent } from './extended/extended.component';
import { HourlyComponent } from './hourly/hourly.component';

const routes: Routes = [
  {
    path: 'current',
    component: CurrentComponent
  },
  {
    path: 'extended',
    component: ExtendedComponent
  },
  {
    path: 'hourly',
    component: HourlyComponent
  },
  {
    path: '',
    redirectTo: 'current',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
