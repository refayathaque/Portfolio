import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { HttpModule } from '@angular/http'; // <-- Import HttpModule

import { CityComponent } from './city/city.component';

import { CitiesService } from './cities.service';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [CitiesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
