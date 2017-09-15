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

    private user = new User();
    private user_id: string = "";

    // @Output() anEventEmitter = new EventEmitter();

    login() {

        console.log('(LOGIN COMPONENT) FORM USER OBJECT : ', this.user);
        this._service.login(this.user)
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                this.user_id = data.user._id;
                console.log('(LOGIN COMPONENT) [LOGIN] SUCCESFUL, USER ID : ', this.user_id)
                this._router.navigateByUrl('dashboard')
            }
        })
        .catch((err) => {
            console.log('(LOGIN COMPONENT) [LOGIN] .CATCH')
        })

        // this.anEventEmitter.emit('OUTPUT WORKING');

    }

    ngOnInit() {
    }

}
