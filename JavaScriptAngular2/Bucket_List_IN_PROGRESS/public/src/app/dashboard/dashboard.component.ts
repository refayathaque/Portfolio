import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Bucket_List } from '../bucket-list'; // MUST IMPORT CONSTRUCTOR CLASSES

import { BucketListService } from "app/bucket-list.service";

// HTML - * If the given URL begins with a `/`, router will navigate absolutely. * If the given URL does not begin with `/`, the router will navigate relative to this component. IMPORTANT!!!

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

    constructor(private _service : BucketListService, private _router : Router) { }

    private user;
    private usersExclSessionUser = [];
    private bucketList = new Bucket_List();
    private userItems;
    private updateBoolean: boolean = false;
    private item;

    addItem() {

        this.bucketList.creator = this.user._id // Setting session user id to creator field in bucketList object
        console.log('(DASHBOARD COMPONENT) FORM ITEM OBJECT : ', this.bucketList);
        this._service.addItem(this.bucketList)
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                console.log('(DASHBOARD COMPONENT) [ADD ITEM] RETURN DATA : ', data)

                this._service.getUserItems()
                .then((data) => {
                    this.userItems = data;
                    console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] RETURN DATA : ', this.userItems)
                })
                .catch((err) => {
                    console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] .CATCH')
                })

            }
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) [ADD ITEM] .CATCH')
        })

    }

    changeItemStatus(itemId) {

        this._service.changeItemStatus(itemId)
        console.log('(DASHBOARD COMPONENT) [CHANGE ITEM STATUS] RETURN DATA : ', itemId)

        this._service.getUserItems()
        .then((data) => {
            this.userItems = data;
            console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] RETURN DATA : ', this.userItems)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] .CATCH')
        })

    }

    updateForm(item) {

        if (this.updateBoolean === true) {
            this.updateBoolean = false;
        }
        else {
            this.updateBoolean = true;
        }
        console.log('(DASHBOARD COMPONENT) [UPDATE FORM] ITEM DATA : ', item);
        this.item = item;

    }

    logout() {

        this._service.logout()
        .then(() => { })
        .catch(() => { })
        console.log('(DASHBOARD COMPONENT) [LOGOUT]')
        this._router.navigateByUrl('logout')

    }

    dataFromChild(eventData) {

        console.log('(DASHBOARD COMPONENT) [DATA FROM CHILD] ', eventData);
        this._service.getUserItems()
        .then((data) => {
            this.userItems = data;
            console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] RETURN DATA : ', this.userItems)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] .CATCH')
        })

    }

    delete(itemId) {

        console.log('(DASHBOARD COMPONENT) [DELETE] ITEM ID : ', itemId);
        this._service.delete(itemId)
        .then((data) => {
            console.log('(DASHBOARD COMPONENT) [DELETE] RETURN DATA : ', data)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) [DELETE] .CATCH')
        })

        this._service.getUserItems()
        .then((data) => {
            this.userItems = data;
            console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] RETURN DATA : ', this.userItems)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] .CATCH')
        })

    }

    ngOnInit() {

        this._service.hideLogreg()

        this._service.getSession()
        .then((data) => {
            this.user = data;
            console.log('(DASHBOARD COMPONENT) [GET SESSION] RETURN DATA : ', this.user)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) [GET SESSION] .CATCH')
        })

        this._service.listUsers()
        .then((data) => {
            this.usersExclSessionUser = data.data;
            console.log('(DASHBOARD COMPONENT) [LIST USERS] RETURN DATA : ', this.usersExclSessionUser)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) [LIST USERS] .CATCH')
        })

        this._service.getUserItems()
        .then((data) => {
            this.userItems = data;
            console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] RETURN DATA : ', this.userItems)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) [GET USER ITEMS] .CATCH')
        })

    }

}
