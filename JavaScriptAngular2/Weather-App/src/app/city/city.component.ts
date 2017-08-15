import { Component, OnInit } from '@angular/core';

import { CitiesService } from '../cities.service';

import { Router, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  city_specific_weather_data = [];

  city_id: string = "";

  constructor(private _citiesService: CitiesService, private _route: ActivatedRoute) { }

  ngOnInit() {

      this._route.paramMap
        .switchMap(params => {
            console.log("City id is", params.get('city_id'))
            this.city_id = params.get('city_id')
            return params.get('city_id');
        })

      this._citiesService.retrieveCitySpecificWeatherData(this.city_id)
        .then(data => { this.city_specific_weather_data = data })
        .catch(err => { console.log('Error!'); })

        console.log(this.city_specific_weather_data);
  }

}
