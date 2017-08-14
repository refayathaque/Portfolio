import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CitiesService {

  constructor(private _http: Http) {}

  retrieveWeatherData(city: string) {
      console.log('Retrieval for ', city, ' works!')
      return this._http.get(''+city)
        .map(data => data.json())
        .toPromise();
  }

}
