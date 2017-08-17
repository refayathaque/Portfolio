import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityComponent } from './city/city.component';

const routes: Routes = [
    { path: 'atlanta/:city_id', component: CityComponent },
    { path: 'boston/:city_id', component: CityComponent },
    { path: 'chicago/:city_id', component: CityComponent },
    { path: 'washingtondc/:city_id', component: CityComponent },
    { path: 'miami/:city_id', component: CityComponent },
    { path: 'philadelphia/:city_id', component: CityComponent },
    { path: 'newyorkcity/:city_id', component: CityComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
