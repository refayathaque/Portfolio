import { Component, OnInit, OnChanges } from '@angular/core';
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

    // ngOnChanges() {
    //     // this._service.getUserItems()
    //     // .then((data) => {
    //     //     this.userItems = data;
    //     //     console.log('(DASHBOARD COMPONENT) USER ITEMS : ', this.userItems)
    //     // })
    //     // .catch((err) => {
    //     //     console.log('(DASHBOARD COMPONENT) GETUSERITEMS FUNCTION .CATCH')
    //     // })
    //     console.log(`NGONCHANGES`)
    // }

    addItem() {
        this.bucketList.creator = this.user._id // Setting session user id to creator field in bucketList object
        console.log('(DASHBOARD COMPONENT) FORM ITEM OBJECT : ', this.bucketList);
        this._service.addItem(this.bucketList)
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                console.log('(DASHBOARD COMPONENT) ITEM ADDED, RETURN DATA : ', data)
            }
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) .CATCH')
        })
        // this._router.navigate(['dashboard']) -> Won't reload component -_-
        // this._router.navigateByUrl('dashboard') -> Won't reload component -_-
    }

    changeItemStatus(itemId) {
        this._service.changeItemStatus(itemId)
        console.log('(DASHBOARD COMPONENT) CHANGEITEMSTATUS OF (ITEM ID) : ', itemId)
        // this._router.navigateByUrl('dashboard') -> Won't reload component -_-
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
            this.usersExclSessionUser = data.data;
            console.log('(DASHBOARD COMPONENT) LISTUSERS FUNCTION RETURN DATA ARRAY : ', this.usersExclSessionUser)
            console.log(this.user._id) // works, session user id logged, but won't pick up variable in the following service function
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) LISTUSERS FUNCTION .CATCH')
        })

        this._service.getUserItems()
        .then((data) => {
            this.userItems = data;
            console.log('(DASHBOARD COMPONENT) USER ITEMS : ', this.userItems)
        })
        .catch((err) => {
            console.log('(DASHBOARD COMPONENT) GETUSERITEMS FUNCTION .CATCH')
        })

    }
}
