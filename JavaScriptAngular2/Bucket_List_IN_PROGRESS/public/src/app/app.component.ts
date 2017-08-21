import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'your Bucket List';
    eventData: string = "";

    UserIDFromChild(eventData) {
        this.eventData = eventData;
        console.log('In root component ', eventData);
    }

}
