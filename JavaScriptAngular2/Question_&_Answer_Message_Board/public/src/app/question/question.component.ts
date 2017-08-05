import { Component, OnInit } from '@angular/core';
import { Cookie } from "ng2-cookies";
import { Router } from "@angular/router";
import { LoginRegistrationService } from "app/loginregistration.service";
import { Question } from '../question'; // MUST IMPORT CONSTRUCTOR CLASSES
import { ActivatedRoute } from "@angular/router"; // MUST IMPORT FOR PASSING ID IN URL

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})

export class QuestionComponent implements OnInit {

  constructor(private _LoginRegistrationService: LoginRegistrationService, private _Router: Router, _activatedRoute: ActivatedRoute) { } // Dependency Injections for some IMPORTS

  question = new Question(); // Instantiating class 'question'

  ngOnInit() { }

  submitquestion() {
      this.question.created_by = Cookie.get('logged_id');
      console.log('Question Component Before Service Call', this.question)
      this._LoginRegistrationService.submitQuestion(this.question)
      .then((data) => {
          if(data) {
              alert(data.messages)
              this._Router.navigateByUrl('home')
              // Route worked bc just 'data' was passed in above in if statement, not 'data.question' or 'data.content'
          } else {
              alert(data.messages)
          }
      })
      .catch((err) => {
      console.log("ERR Inside Question Component")
      console.log(err)
      })
  }

  logout() {
      Cookie.deleteAll()
      this._Router.navigateByUrl('login')
  }

}
