import { Injectable } from '@angular/core';

import { Http } from "@angular/http";

import 'rxjs/RX'; // RxJS stands for *R*eactive E*x*tensions for *J*ava*S*cript, and its a library that gives us an implementation of Observables for JS

@Injectable()

export class BucketListService {

    constructor(private _http : Http) { }

    register(user) {
        return this._http.post('/api/users/register', user)
        .map((data) => {
            console.log('(SERVICE) [REGISTER] AFTER HTTP CALL, RETURN DATA : ', data)
            return data.json()
        })
        .toPromise();
    }

    login(user) {
        return this._http.post('/api/users/login', user)
        .map((data) => {
            console.log('(SERVICE) [LOGIN] AFTER HTTP CALL, RETURN DATA : ', data)
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

    getItem(ItemId) {
        console.log('ITEM ID FOR UPDATE : ', ItemId);
    }

}
