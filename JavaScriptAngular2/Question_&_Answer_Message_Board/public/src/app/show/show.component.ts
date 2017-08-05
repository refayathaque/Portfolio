import { Component, OnInit } from '@angular/core';
import { Cookie } from "ng2-cookies";
import { Router } from "@angular/router";
import { LoginRegistrationService } from "app/loginregistration.service";
import { Question } from '../question'; // MUST IMPORT CONSTRUCTOR CLASSES
import { ActivatedRoute } from "@angular/router"; // MUST IMPORT FOR PASSING ID IN URL

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private _LoginRegistrationService: LoginRegistrationService, private _Router: Router, private _activatedRoute: ActivatedRoute) { }

  question = {}

  ngOnInit() {
      this._LoginRegistrationService.show(this._activatedRoute.snapshot.params['id'])
      .then(data => {
          this.question = data
      })
      .catch(err => console.log(err))
  }

  likes(id) {
    this._LoginRegistrationService.like(id)
    .then(data => { })
    .catch(err => console.log(err))

    this._LoginRegistrationService.show(this._activatedRoute.snapshot.params['id'])
    .then(data => {
        this.question = data
    })
    .catch(err => console.log(err))
  }

  logout() {
      Cookie.deleteAll()
      this._Router.navigateByUrl('login')
  }

}
