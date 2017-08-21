import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bucket_List } from '../bucket-list'; // MUST IMPORT CONSTRUCTOR CLASSES

import { BucketListService } from "app/bucket-list.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    constructor(private _service : BucketListService) { }

    private user = {};
    private friends = [];
    private bucket_list = new Bucket_List();

    ngOnInit() {
        this._service.dashboard()
        .then((data) => {
            this.user = data;
            console.log('User session data : ', this.user)
        })
        .catch((err) => {
            console.log('Error with .then callback in DashboardComponent (dashboard function)')
        })

        this._service.getFriends()
        .then((data) => {
            this.friends = data.data;
            console.log('Friends array : ', this.friends)
        })
        .catch((err) => {
            console.log('Error with .then callback in DashboardComponent (getFriends function)')
        })
    }

}
