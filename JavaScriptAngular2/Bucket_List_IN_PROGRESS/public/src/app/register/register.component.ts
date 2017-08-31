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

    constructor(private _service : BucketListService, private _router : Router) { }

    user = new User();
    user_id: string = "";

    register() {

        console.log('(REGISTER COMPONENT) [REGISTER] FORM USER OBJECT : ', this.user);
        this._service.register(this.user)
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                this.user_id = data.user._id;
                console.log('(REGISTER COMPONENT) [REGISTER] SUCCESFUL, USER ID : ', this.user_id)
                this._router.navigateByUrl('dashboard')
            }
        })
        .catch((err) => {
            console.log('(REGISTER COMPONENT) [REGISTER] .CATCH')
        })

    }

    ngOnInit() {
    }

}
