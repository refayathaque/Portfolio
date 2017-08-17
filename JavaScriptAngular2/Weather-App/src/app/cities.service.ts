import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CitiesService {

    constructor(private _http: Http) {}

    retrieveCitySpecificWeatherData(city_id) {
        console.log(city_id)
        console.log('City Specific Retrieval working, city_id = ', city_id)
        return this._http.get('http://api.openweathermap.org/data/2.5/weather?id='+city_id+'&units=metric&APPID=6ae4507d555f1bc2f4e00792f1eaba1f')
        .map(data => data.json())
        .toPromise();
    }

    // Below is experimentation with making single API calls to retrieve multiple city data
    // retrieveWeatherData() {
    //     console.log('Retrieval working')
    //     return this._http.get('http://api.openweathermap.org/data/2.5/group?id=4140963,4887398,5128638,4560349,4542692,4671576,4317656&units=metric&APPID=6ae4507d555f1bc2f4e00792f1eaba1f')
    //     .map(data => data.json())
    //     .toPromise();
    // }

}
