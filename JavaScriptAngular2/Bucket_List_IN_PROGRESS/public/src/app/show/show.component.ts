import { Component, OnInit } from '@angular/core';

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
    private friendItemsDone = [];
    private user;
    private friend;

    dashboard() {
        this._router.navigateByUrl('/dashboard')
    }

    ngOnInit() {

        this._route.paramMap
        .switchMap(params => {
            console.log('(SHOW COMPONENT) FRIEND ID : ', params.get('id'));
            return this._service.getFriendItemsPending(params.get('id'));
        })
        .subscribe(data => this.friendItemsPending = data);

        this._route.paramMap
        .switchMap(params => {
            return this._service.getFriendItemsDone(params.get('id'));
        })
        .subscribe(data => this.friendItemsDone = data);

        this._route.paramMap
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

}
