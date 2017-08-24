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
    private user_state: boolean;
    // private notLogOrRegComp: boolean;

    ngOnInit() {
        this._service.getSession()
        .then((data) => {
            if(Object.keys(data).length === 0) {
                console.log('(APP COMPONENT) NOTHING IN SESSION')
                this.user_state = false;
            }
            else {
                this.user = data;
                console.log('(APP COMPONENT) SESSION DATA : ', this.user)
                this.user_state = true;
            }
        })
        .catch((err) => {
            console.log('ERR', err)
            console.log('(APP COMPONENT) .CATCH')
        })
    }

}
