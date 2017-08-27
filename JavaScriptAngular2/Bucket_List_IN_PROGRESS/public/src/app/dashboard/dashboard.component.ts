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

    private user;
    private allUsers = [];
    private bucketList = new Bucket_List();
    private userItems = [];

    addItem() {
        this.bucketList.creator = this.user._id // Setting session user id to creator field in bucketList object
        console.log('(DASHBOARD COMPONENT) FORM ITEM OBJECT : ', this.bucketList);
        this._service.addItem(this.bucketList)
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                console.log('(DASHBOARD COMPONENT) ADDED ITEM, RETURN DATA : ', data)
            }
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) .CATCH')
        })
        /// HERE NOW
        // this._router.navigateByUrl('dashboard')
    }

    logout() {
        this._service.logout()
        .then(() => { })
        .catch(() => { })
        console.log('(DASHBOARD COMPONENT) LOGOUT')
        this._router.navigateByUrl('logout')
    }

    ngOnInit() {

        this._service.getSession()
        .then((data) => {
            this.user = data;
            console.log('(DASHBOARD COMPONENT) SESSION DATA : ', this.user)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) GETSESSION FUNCTION .CATCH')
        })

        this._service.listUsers()
        .then((data) => {
            this.allUsers = data.data;
            console.log('(DASHBOARD COMPONENT) LISTUSERS FUNCTION RETURN DATA ARRAY : ', this.allUsers)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) LISTUSERS FUNCTION .CATCH')
        })

        this._service.getUserItems(this.user._id)
        .then((data) => {
            this.userItems = data;
            console.log('(DASHBOARD COMPONENT) USER ITEMS : ', this.userItems)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) GETUSERITEMS FUNCTION .CATCH')
        })

    }

}
