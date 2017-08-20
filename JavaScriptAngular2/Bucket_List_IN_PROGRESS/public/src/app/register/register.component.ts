import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from '../user'; // MUST IMPORT CONSTRUCTOR CLASSES

import { BucketListService } from "app/bucket-list.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  user = new User();

  ngOnInit() {
  }

  register() {
      console.log('hello');
  }

  test() {
      console.log('hello')
  }

}
