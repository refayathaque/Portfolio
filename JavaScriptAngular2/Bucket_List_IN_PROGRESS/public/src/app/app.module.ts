import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { BucketListService } from "app/bucket-list.service";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BlankComponent } from './blank/blank.component';
import { ShowComponent } from './show/show.component';

import { EqualDirective } from './equal.directive';
import { UpdateComponent } from './dashboard/update/update.component';
import { LogregComponent } from './logreg/logreg.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EqualDirective,
    DashboardComponent,
    BlankComponent,
    ShowComponent,
    UpdateComponent,
    LogregComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],

  providers: [BucketListService],
  bootstrap: [AppComponent]

})

export class AppModule { }
