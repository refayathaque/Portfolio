import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { QuestionComponent } from './question/question.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
    { path: '', pathMatch: "full", redirectTo: 'login'},
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'home', component: HomeComponent },
    { path: 'newquestion', component: QuestionComponent },
    { path: 'show/:id', component: ShowComponent },
    { path: 'answer/:id', component: AnswerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
