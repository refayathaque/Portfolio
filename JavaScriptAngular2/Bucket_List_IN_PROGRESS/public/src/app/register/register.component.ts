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

    // @Output() SendingUpUserID = new EventEmitter();

    ngOnInit() {
    }

    register() {
        console.log(this.user);
        this._service.register(this.user)
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                this.user_id = data.user._id;
                console.log('User succesfully registered, id : ', this.user_id)
                this._router.navigateByUrl('dashboard')
                // this.SendingUpUserID.emit(this.user_id)
            }
        })
        .catch((err) => {
            console.log('Error with .then callback in RegisterComponent')
        })
    }
}
