import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/RX'; // RxJS stands for *R*eactive E*x*tensions for *J*ava*S*cript, and its a library that gives us an implementation of Observables for JS

@Injectable()
export class BucketListService {

  constructor(private _http : Http) { }

  register(user) {
    return this._http.post('/register', user)
    .map((data) => {
      console.log('(SERVICE) AFTER HTTP CALL REGISTERING USER TO DB, RETURN DATA : ', data)
      return data.json()
    })
    .toPromise();
  }

  login(user) {
    return this._http.post('/login', user)
    .map((data) => {
      console.log('(SERVICE) AFTER HTTP CALL LOGGING IN USER, RETURN DATA : ', data)
      return data.json()
    })
    .toPromise();
  }

  logout() {
      return this._http.get('/logout')
      .map((data) => {
        console.log('(SERVICE) LOGOUT, RETURN DATA : ', data)
        return data.json()
      })
      .toPromise();
  }

  getSessionID() {
      return this._http.get('/getSessionID')
      .map((data) => {
          console.log("(SERVICE) AFTER HTTP CALL GETTING SESSION, RETURN DATA : ", data)
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

  getFriends() {
      return this._http.get('/getFriends')
      .map((data) => {
          console.log("Inside Service after HTTP call getting friends, this is friends array : ", data)
          return data.json()
      })
      .toPromise();
  }

}
