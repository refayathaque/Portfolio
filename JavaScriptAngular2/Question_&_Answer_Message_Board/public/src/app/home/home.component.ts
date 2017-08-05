import { Component, OnInit } from '@angular/core';
import { Cookie } from "ng2-cookies";
import { Router } from "@angular/router";
import { LoginRegistrationService } from "app/loginregistration.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

    username = Cookie.get('logged_username')

    questions = []

  constructor(private _Router: Router, private _LoginRegistrationService: LoginRegistrationService) { }
  // ERROR Can't resolve parameters Component, related to Dependency Injections
  // Called first time before the ngOnInit()

  ngOnInit() {
      this._LoginRegistrationService.index()
      .then(data => {
          this.questions = data
          console.log(this.questions)
      })
      .catch(err => console.log(err))
  }
  // Called after the constructor and called  after the first ngOnChanges()

  logout() {
      Cookie.deleteAll()
      this._Router.navigateByUrl('login')
  }

  addquestion() {
      this._Router.navigateByUrl('newquestion')
  }

}
