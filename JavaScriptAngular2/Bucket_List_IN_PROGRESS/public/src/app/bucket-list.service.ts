import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/RX'; // RxJS stands for *R*eactive E*x*tensions for *J*ava*S*cript, and its a library that gives us an implementation of Observables for JS

@Injectable()
export class BucketListService {

  constructor(private _http : Http) { }

  register(user) {
    return this._http.post('/register', user)
    .map((data) => {
      console.log("Inside Service after HTTP call storing user in db, this is the return data : ", data)
      return data.json()
    })
    .toPromise();
  }

  dashboard() {
      return this._http.get('/dashboard')
      .map((data) => {
          console.log("Inside Service after HTTP call loading up dashboard, this is user session data : ", data)
          return data.json()
      })
      .toPromise();
  }

}
