import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { User } from '../user'; // MUST IMPORT CONSTRUCTOR CLASSES

import { BucketListService } from "app/bucket-list.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _service : BucketListService, private _router : Router) { }

    user = new User();
    user_id: string = "";

    login() {
        console.log('(LOGIN COMPONENT) FORM USER OBJECT : ', this.user);
        this._service.login(this.user)
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                this.user_id = data.user._id;
                console.log('(LOGIN COMPONENT) SUCCESFULLY LOGGED IN, USER ID : ', this.user_id)
                this._router.navigateByUrl('dashboard')
            }
        })
        .catch((err) => {
            console.log('(REGISTER COMPONENT) .CATCH')
        })
    }

    ngOnInit() {
    }
}
