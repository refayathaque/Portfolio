import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import { ChicagoComponent } from './chicago/chicago.component';
import { BostonComponent } from './boston/boston.component';
import { NewyorkComponent } from './newyork/newyork.component';
import { PhiladelphiaComponent } from './philadelphia/philadelphia.component';
import { DcComponent } from './dc/dc.component';
import { AtlantaComponent } from './atlanta/atlanta.component';
import { MiamiComponent } from './miami/miami.component'; // <-- Import HttpModule

@NgModule({
  declarations: [
    AppComponent,
    ChicagoComponent,
    BostonComponent,
    NewyorkComponent,
    PhiladelphiaComponent,
    DcComponent,
    AtlantaComponent,
    MiamiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule // <-- Include module in our AppModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
