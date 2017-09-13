import { Component, OnInit, Input } from '@angular/core';

import { Bucket_List } from '../../bucket-list'; // MUST IMPORT CONSTRUCTOR CLASSES

import { BucketListService } from "app/bucket-list.service";

@Component({
    selector: 'app-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {

    constructor(private _service : BucketListService) { }

    private bucketList = new Bucket_List();

    @Input() private item;

    updateItem() {

        this._service.updateItem(this.bucketList, this.item._id)
        // .then((data) => {
        //     if(data.error) {
        //         alert(data.messages)
        //     }
        //     else {
        //         console.log('(UPDATE COMPONENT) RETURN DATA : ', data)
        //     })
        // .catch((err) => {
        //     console.log('(UPDATE COMPONENT) .CATCH')
        // })

    }

    ngOnInit() {
    }

}
