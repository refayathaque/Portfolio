import { Injectable } from '@angular/core';

import { Http } from "@angular/http";

import 'rxjs/RX'; // RxJS stands for *R*eactive E*x*tensions for *J*ava*S*cript, and its a library that gives us an implementation of Observables for JS

@Injectable()
export class BucketListService {

  constructor(private _http : Http) { }

  register(user) {
    return this._http.post('/api/users/register', user)
    .map((data) => {
      console.log('(SERVICE) AFTER HTTP CALL REGISTERING USER TO DB, RETURN DATA : ', data)
      return data.json()
    })
    .toPromise();
  }

  login(user) {
    return this._http.post('/api/users/login', user)
    .map((data) => {
      console.log('(SERVICE) AFTER HTTP CALL LOGGING IN USER, RETURN DATA : ', data)
      return data.json()
    })
    .toPromise();
  }

  logout() {
      return this._http.get('/api/users/logout')
      .map((data) => {
          console.log('(SERVICE) LOGOUT, RETURN DATA : ', data)
          return data.json()
      })
      .toPromise();
  }

  getSession() {
      return this._http.get('/api/users/getSession')
      .map((data) => {
          console.log("(SERVICE) AFTER HTTP CALL GETTING SESSION, RETURN DATA : ", data)
          return data.json()
      })
      .toPromise();
  }

  listUsers() {
      return this._http.get('/api/items/listUsers')
      .map((data) => {
          console.log("(SERVICE) AFTER HTTP CALL GETTING ALL USERS, RETURN DATA : ", data)
          return data.json()
      })
      .toPromise();
  }

  getUserItems(userId) {
      return this._http.get('/api/items/getUserItems', userId)
      .map((data) => {
          console.log("(SERVICE) AFTER HTTP CALL GETTING USER ITEMS, RETURN DATA : ", data)
          return data.json()
      })
      .toPromise();
  }

  addItem(bucketList) {
      return this._http.post('api/items/addItem', bucketList)
      .map((data) => {
          console.log("(SERVICE) AFTER HTTP CALL ADDING ITEM, RETURN DATA : ", data)
          return data.json()
      })
      .toPromise();
  }

}
