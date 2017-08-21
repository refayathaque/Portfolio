import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BucketListService } from "app/bucket-list.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    private user = {};

    constructor(private _service : BucketListService) { }

    ngOnInit() {
        this._service.dashboard()
        .then((data) => {
            this.user = data;
            console.log('User session data : ', this.user)
        })
        .catch((err) => {
            console.log('Error with .then callback in DashboardComponent')
        })
    }

}
