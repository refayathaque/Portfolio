import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ComponentOneComponent } from './component-one/component-one.component';

import { FormsModule } from '@angular/forms'; // <-- Import FormsModule

import { HttpModule } from '@angular/http';
import { ComponentTwoChildComponent } from './component-two-child/component-two-child.component'; // <-- Import HttpModule

@NgModule({
  declarations: [
    AppComponent,
    ComponentOneComponent,
    ComponentTwoChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
