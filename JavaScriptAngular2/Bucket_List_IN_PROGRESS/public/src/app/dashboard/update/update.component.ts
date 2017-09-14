import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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
    private item_updated: boolean = false;

    @Input() private item;

    @Output() anEventEmitter = new EventEmitter();

    update() {

        this._service.update(this.bucketList, this.item._id)
        .then((data) => {
            if(data.error) {
                alert(data.messages)
            }
            else {
                console.log('(UPDATE COMPONENT) RETURN DATA : ', data)
            }
        })
        .catch((err) => {
            console.log('(UPDATE COMPONENT) .CATCH')
        })

        this.anEventEmitter.emit('OUTPUT WORKING');

    }

    ngOnInit() {

        if (this.item.updatedAt === this.item.createdAt) {
            this.item_updated = false;
        }
        else {
            this.item_updated = true;
        }

    }

}
