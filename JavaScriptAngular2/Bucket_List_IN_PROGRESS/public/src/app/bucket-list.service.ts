import { Injectable, EventEmitter } from '@angular/core';

import { Http } from "@angular/http";

import 'rxjs/RX'; // RxJS stands for *R*eactive E*x*tensions for *J*ava*S*cript, and its a library that gives us an implementation of Observables for JS

@Injectable()

export class BucketListService {

    constructor(private _http : Http) { }

    public anEventEmitter = new EventEmitter();

    register(user) {
        return this._http.post('/api/users/register', user)
        .map((data) => {
            console.log('(SERVICE) [REGISTER] AFTER HTTP CALL, RETURN DATA : ', data)
            // if (data.status === 200) {
            //     this.anEventEmitter.emit(false);
            // }
            // ^ Not good way of hiding logreg component, bc data.status will always be 200, even if the login is succesful. Working right now without issues bc of code that changes compnennt once login is succesful, but this should def be revisted later. Solution imo lies in first converting data to json format (data.json()) then trying to access the '_body' of the object and checking 'messages' for the 'Password is invalid' string.

            const x = data.json()
            console.log(x)
            if (x.error) {
                this.anEventEmitter.emit(false);
            }

            // ^ Good way of hiding logreg component. Now we can access '_body' bc we converted object to json, after converting to json it becomes its own object with only 'error' and 'messages' inside.

            // INGENIOUS way of passing data ANYWHERE in ng2 application. This EventEmitter will be available to ANY component because it's being emitted by the service (something available to all components). Check code in app-component to see implementation.
            return data.json()
        })
        .toPromise();
    }

    login(user) {
        return this._http.post('/api/users/login', user)
        .map((data) => {
            console.log('(SERVICE) [LOGIN] AFTER HTTP CALL, RETURN DATA : ', data)
            // if (data.status === 200) {
            //     this.anEventEmitter.emit(false);
            // }
            // ^ Not good way of hiding logreg component, bc data.status will always be 200, even if the login is succesful. Working right now without issues bc of code that changes compnennt once login is succesful, but this should def be revisted later. Solution imo lies in first converting data to json format (data.json()) then trying to access the '_body' of the object and checking 'messages' for the 'Password is invalid' string.

            const y = data.json()
            console.log(y)
            if (y.error) {
                this.anEventEmitter.emit(false);
            }

            // ^ Good way of hiding logreg component. Now we can access '_body' bc we converted object to json, after converting to json it becomes its own object with only 'error' and 'messages' inside.

            // INGENIOUS way of passing data ANYWHERE in ng2 application. This EventEmitter will be available to ANY component because it's being emitted by the service (something available to all components). Check code in app-component to see implementation.
            return data.json()
        })
        .toPromise();
    }

    getSession() {
        return this._http.get('/api/users/getSession')
        .map((data) => {
            console.log("(SERVICE) [GET SESSION] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    getFriendData(friendId) {
        return this._http.get(`/api/users/getFriendData/${friendId}`)
        .map((data) => {
            console.log("(SERVICE) [GET FRIEND DATA] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    listUsers() {
        return this._http.get('/api/users/listUsers')
        .map((data) => {
            console.log("(SERVICE) [LIST USERS] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    logout() {
        return this._http.get('/api/users/logout')
        .map((data) => {
            console.log('(SERVICE) [LOGOUT] AFTER HTTP CALL RETURN DATA : ', data)
            this.anEventEmitter.emit(false);
            return data.json()
        })
        .toPromise();
    }

    addItem(bucketList) {
        return this._http.post('/api/items/addItem', bucketList)
        .map((data) => {
            console.log("(SERVICE) [ADD ITEM] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    // ORDER MATTERS IN SERVICE, AS RESULT OF MOVING 'addItem' AND 'changeItemStatus' WE CAN HAVE OUR DASHBOARD UPDATE ITEM STATUS AND ITEM LIST AS SOON AS USER CHANGES THE STATUS OR ADDS A NEW ITEM

    changeItemStatus(itemId) {
        console.log(itemId)
        return this._http.get(`/api/items/changeItemStatus/${itemId}`)
        .map((data) => {
            console.log("(SERVICE) [CHANGE ITEM STATUS] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    getUserItems() {
        return this._http.get('/api/items/getUserItems')
        .map((data) => {
            console.log("(SERVICE) [GET USER ITEMS] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    getFriendItemsPending(UserId) {
        return this._http.get(`api/items/getFriendItemsPending/${UserId}`)
        .map((data) => {
            console.log("(SERVICE) [GET FRIEND ITEMS PENDING] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    getFriendItemsDone(UserId) {
        return this._http.get(`api/items/getFriendItemsDone/${UserId}`)
        .map((data) => {
            console.log("(SERVICE) [GET FRIEND ITEMS DONE] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    update(item, itemId) {
        console.log('(SERVICE) [UPDATE] BEFORE HTTP CALL, UPDATED ITEM : ', item, ', ITEM ID : ', itemId)
        return this._http.put(`api/items/update/${itemId}`, item)
        .map((data) => {
            console.log("(SERVICE) [UPDATE] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    delete(itemId) {
        return this._http.delete(`api/items/delete/${itemId}`)
        .map((data) => {
            console.log("(SERVICE) [DELETE] AFTER HTTP CALL, RETURN DATA : ", data)
            return data.json()
        })
        .toPromise();
    }

    hideLogreg() {
        this.anEventEmitter.emit(true);
    }

}
