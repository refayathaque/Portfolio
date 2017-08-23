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

    constructor(private _service : BucketListService, private _router : Router) { }

    private user = {};
    private friends = [];
    private bucket_list = new Bucket_List();

    addBucketListItem() {
        console.log(this.bucket_list);
        this._router.navigateByUrl('dashboard')
    }
    // STILL WORKING ON THIS

    logout() {
        this._service.logout()
        console.log('(DASHBOARD COMPONENT) LOGOUT')
        this._router.navigateByUrl('logout')
    }

    ngOnInit() {
        this._service.dashboard()
        .then((data) => {
            this.user = data;
            console.log('(DASHBOARD COMPONENT) SESSION DATA : ', this.user)
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
