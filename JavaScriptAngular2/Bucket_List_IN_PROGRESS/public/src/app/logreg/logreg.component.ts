import { Component, OnInit } from '@angular/core';

import { User } from '../user'; // MUST IMPORT CONSTRUCTOR CLASSES

import { BucketListService } from "app/bucket-list.service";

@Component({
    selector: 'app-logreg',
    templateUrl: './logreg.component.html',
    styleUrls: ['./logreg.component.css']
})
export class LogregComponent implements OnInit {

    constructor(private _service : BucketListService) { }

    private user = new User();
    private user_state: boolean;

    ngOnInit() {

        this._service.getSession()
        .then((data) => {
            if(Object.keys(data).length === 0) {
                console.log('(APP COMPONENT) [GET SESSION] NOTHING IN SESSION')
                this.user_state = false;
            }
            else {
                this.user = data;
                console.log('(APP COMPONENT) [GET SESSION] RETURN DATA : ',     this.user)
                this.user_state = true;
            }
        })
        .catch((err) => {
            console.log('ERR', err)
            console.log('(APP COMPONENT) .CATCH')
        })

    }

}
