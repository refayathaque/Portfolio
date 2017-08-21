import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    user_id: string = "";

    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {

        this._route.paramMap
            .switchMap(params => {
                console.log("DashboardComponent loaded and url ID given is: ", params.get('id'));
        })
        .subscribe(data => this.user_id = data);

    }


}
