import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CitiesService {

  constructor(private _http: Http) {}

  retrieveWeatherData() {
      console.log('Retrieval works!')
      return this._http.get('http://api.openweathermap.org/data/2.5/forecast?id=5815135&APPID=6ae4507d555f1bc2f4e00792f1eaba1f')
        .map(data => data.json())
        .toPromise();
  }

}
