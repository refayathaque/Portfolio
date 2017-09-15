import { Component } from '@angular/core';

import { BucketListService } from "app/bucket-list.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {

    constructor(private _service : BucketListService) { }

    private title = 'your Bucket List';
    private user_state: boolean;

    ngOnInit() {

        this._service.anEventEmitter.subscribe(data => {
            // ABOVE CODE IS GOLDEN - easiest form of observables
            if (data === true) {
                this.user_state = true;
            }
            if (data === false) {
                this.user_state = false;
            }
        })

    }

}
