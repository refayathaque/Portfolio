import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CitiesService {

  constructor(private _http: Http) {}

  retrieveWeatherData() {
      console.log('Retrieval working')
      return this._http.get('http://api.openweathermap.org/data/2.5/group?id=4140963,4887398,5128638,4560349,4542692,4671576,4317656&units=metric&APPID=6ae4507d555f1bc2f4e00792f1eaba1f')
        .map(data => data.json())
        .toPromise();
  }

}
