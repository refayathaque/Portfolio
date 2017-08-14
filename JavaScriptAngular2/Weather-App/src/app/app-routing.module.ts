import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AtlantaComponent } from './atlanta/atlanta.component';
import { BostonComponent } from './boston/boston.component';
import { DcComponent } from './dc/dc.component';
import { PhiladelphiaComponent } from './philadelphia/philadelphia.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { MiamiComponent } from './miami/miami.component';

const routes: Routes = [
  { path: 'atlanta', component: AtlantaComponent },
  { path: 'boston', component: BostonComponent },
  { path: 'chicago', component: ChicagoComponent },
  { path: 'washingtondc', component: DcComponent },
  { path: 'miami', component: MiamiComponent },
  { path: 'philadelphia', component: PhiladelphiaComponent },
  { path: 'newyorkcity', component: NewyorkComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
