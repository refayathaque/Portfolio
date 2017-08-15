import { NgModule } from '@angular/core';

import { Routes, RouterModule, ActivatedRoute } from '@angular/router';

import { CityComponent } from './city/city.component';

const routes: Routes = [
  { path: 'atlanta', component: CityComponent },
  { path: 'boston', component: CityComponent },
  { path: 'chicago', component: CityComponent },
  { path: 'washingtondc', component: CityComponent },
  { path: 'miami', component: CityComponent },
  { path: 'philadelphia', component: CityComponent },
  { path: 'newyorkcity', component: CityComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
