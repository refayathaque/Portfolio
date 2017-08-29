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

    constructor(private _service : BucketListService, private _route : ActivatedRoute) { }

    private friendItemsPending = [];
    private friendItemsDone = [];

    ngOnInit() {
        this._route.paramMap
        .switchMap(params => {
            console.log(params.get('id'));
            return this._service.getFriendItemsPending(params.get('id'));
        })
        // .subscribe(data => this.friendItemsPending = data);

        this._route.paramMap
        .switchMap(params => {
            console.log(params.get('id'));
            return this._service.getFriendItemsDone(params.get('id'));
        })
        // .subscribe(data => this.friendItemsPending = data);
    }
}
