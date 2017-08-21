import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BucketListService } from "app/bucket-list.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    user_id: string = "";

    constructor(private _service : BucketListService) { }

    ngOnInit() { }

    load() {
        this._service.dashboard()
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                this.user_id = data.user._id;
                console.log('User session ID : ', this.user_id)
            }
        })
        .catch((err) => {
            console.log('Error with .then callback in DashboardComponent')
        })
    }

}
