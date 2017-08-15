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

  city_specific_weather_data = {name: ""};

  constructor(private _route: ActivatedRoute, private _citiesService: CitiesService) { }

  ngOnInit() {

      this._route.paramMap
        .switchMap(params => {
            return this._citiesService.retrieveCitySpecificWeatherData(params.get('city_id'))
        })
      .subscribe(data => {
          this.city_specific_weather_data = data
          console.log(this.city_specific_weather_data.name);
      })

  }

}
