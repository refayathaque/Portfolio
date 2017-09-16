import { Component, OnInit, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { BucketListService } from "app/bucket-list.service";

@Component({
    selector: 'app-show',
    templateUrl: './show.component.html',
    styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

    constructor(private _service : BucketListService, private _route : ActivatedRoute, private _router : Router) { }

    private friendItemsPending = [];
    private itemsPending: boolean = true;
    private friendItemsDone = [];
    private itemsDone: boolean = true;
    private user;
    private friend;
    private subscriptionA;
    private subscriptionB;
    private subscriptionC;

    dashboard() {
        this._router.navigateByUrl('/dashboard')
    }

    ngOnInit() {

        this._service.hideLogreg()

        this.subscriptionA = this._route.paramMap
        .switchMap(params => {
            console.log('(SHOW COMPONENT) FRIEND ID : ', params.get('id'));
            return this._service.getFriendItemsPending(params.get('id'));
        }).subscribe(data => {
            this.friendItemsPending = data;
            if (this.friendItemsPending.length < 1) {
                this.itemsPending = false;
            }
        });
        // What we did above has to do with scope. If we tried to get the array's length outside of the '.subscribe =>' block then it wouldn't work. To get the length of the array RIGHT AFTER it has been populated we must check its length WITHIN the block of code in which the array is being populated with the data from the API call.

        // The *ngIf ng2 Structural Directive is actually quite accomodating and can take in a lot more code that I thought. Having said that, lines 5 through 7 in the component template could've been done by simply checking the array lengths and seeing if they are more than 0 or not.

        this.subscriptionB = this._route.paramMap
        .switchMap(params => {
            return this._service.getFriendItemsDone(params.get('id'));
        }).subscribe(data => {
            this.friendItemsDone = data;
            if (this.friendItemsDone.length < 1) {
                this.itemsDone = false;
            }
        });

        this.subscriptionC = this._route.paramMap
        .switchMap(params => {
            return this._service.getFriendData(params.get('id'));
        })
        .subscribe(data => this.friend = data);

        this._service.getSession()
        .then((data) => {
            this.user = data;
            console.log('(SHOW COMPONENT) [GET SESSION] RETURN DATA : ', this.user)
        })
        .catch((err) => {
            console.log('(SHOW COMPONENT) [GET SESSION] .CATCH')
        })

    }

    ngOnDestroy() {
        this.subscriptionA.unsubscribe();
        console.log('SUBSCRIPTION DESTROYED', this.subscriptionA)
        this.subscriptionB.unsubscribe();
        console.log('SUBSCRIPTION DESTROYED', this.subscriptionB)
        this.subscriptionC.unsubscribe();
        console.log('SUBSCRIPTION DESTROYED', this.subscriptionC)
    }

}
