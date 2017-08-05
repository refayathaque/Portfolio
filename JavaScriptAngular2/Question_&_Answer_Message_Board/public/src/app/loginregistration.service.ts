import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs/RX'; // RxJS stands for *R*eactive E*x*tensions for *J*ava*S*cript, and its a library that gives us an implementation of Observables for JS

@Injectable()
export class LoginRegistrationService {

  constructor(private _Http: Http) { }

  registerUser(user) {
    console.log(user)
    return this._Http.post('/users', user)
    .map((data) => {
      console.log("Inside Service (Registration) After HTTP Call")
      console.log("data", data)
      return data.json()
    })
    .toPromise();
  }

  loginUser(user) {
    console.log(user)
    return this._Http.post('/login', user)
    .map((data) => {
      console.log("Inside Service (Login) After HTTP Call")
      console.log(data)
      return data.json()
    })
    .toPromise();
  }

  submitQuestion(question) {
    console.log('Question in Service', question)
    return this._Http.post('/newquestions', question)
    .map((data) => {
      console.log("Inside Service (Question) After HTTP Call")
      console.log("Data being returned to component", data)
      return data.json()
    })
    .toPromise();
  }

  index() {
      return this._Http.get('/index')
      .map((data) => {
          console.log("Data being returned to component", data)
          return data.json()
      })
      .toPromise();
  }

  show(id){
    return this._Http.get(`/questions/${id}`)
    .map((data)=>{
      return data.json()
    })
    .toPromise()
  }

  like(id){
    return this._Http.post(`/answers/${id}/like`, {id:id})
    .map((data)=>{

      return data.json()
    })
    .toPromise()
  }

  submitAnswer(id, answer) {
    console.log('Answer in Service', answer)
    return this._Http.post(`/newanswers/${id}`, answer)
    .map((data) => {
      console.log("Inside Service (Answer) After HTTP Call")
      console.log("Data being returned to component", data)
      return data.json()
    })
    .toPromise();
  }

}
