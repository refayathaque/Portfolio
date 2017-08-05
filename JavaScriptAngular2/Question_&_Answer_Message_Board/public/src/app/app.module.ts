import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { LoginRegistrationService } from "app/loginregistration.service";
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    QuestionComponent,
    ShowComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule // MANUALLY DO THIS FOR SERVICES!
  ],
  providers: [LoginRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
