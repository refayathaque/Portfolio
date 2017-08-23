import { Component } from '@angular/core';

import { User } from './user'; // MUST IMPORT CONSTRUCTOR CLASSES

import { BucketListService } from "app/bucket-list.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private _service : BucketListService) { }

    private title = 'your Bucket List';
    private user = new User();

    ngOnInit() {
        this._service.getSessionID()
        .then((data) => {
            if(data) {
                this.user = data;
                console.log('(APP COMPONENT) SESSION DATA : ', this.user)
            }
            else {
                console.log('(APP COMPONENT) NOTHING IN SESSION')
            }
        })
        .catch((err) => {
            console.log('(APP COMPONENT) .CATCH')
        })
    }

}
