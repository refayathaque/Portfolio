import { Component, OnInit } from '@angular/core';
import { Cookie } from 'ng2-cookies';
import { Router } from "@angular/router";
import { LoginRegistrationService } from "app/loginregistration.service";
import { User } from '../user'; // MUST IMPORT CONSTRUCTOR CLASSES

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private _LoginRegistrationService: LoginRegistrationService, private _Router: Router) {
      if(Cookie.check("logged_id")) {
      this._Router.navigateByUrl('home')
      }
  }

  user = new User();

  ngOnInit() {
  }

  login() {
    console.log(this.user)
    this._LoginRegistrationService.loginUser(this.user)
    .then((data) => {
      if(data.login) {
        alert("Welcome back!")
        Cookie.set("logged_id", data.user._id)
        Cookie.set("logged_username", data.user.username)
        this._Router.navigateByUrl('home')
      } else {
        alert(data.error)
      }
    })
  }

}
