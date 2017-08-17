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
  city_name = "";
  avg_in_c: number;
  high_in_c: number;
  low_in_c: number;
  avg_in_f: number;
  high_in_f: number;
  low_in_f: number;

  constructor(private _route: ActivatedRoute, private _citiesService: CitiesService) { }

  ngOnInit() {

      this._route.paramMap
        .switchMap(params => {
            return this._citiesService.retrieveCitySpecificWeatherData(params.get('city_id'))
        })
      .subscribe(data => {
          this.city_specific_weather_data = data
          console.log(this.city_specific_weather_data.name);
          this.city_name = this.city_specific_weather_data.name;
          console.log(this.city_name);
          this.avg_in_c = data.main.temp;
          console.log(this.avg_in_c);
          this.high_in_c = data.main.temp_max;
          console.log(this.high_in_c);
          this.low_in_c = data.main.temp_min;
          console.log(this.low_in_c);

          function convert_to_f(temp_in_c){
              let f: number;
              f = temp_in_c * 9;
              f /= 5;
              f += 32;
              return f;
          }
          this.avg_in_f = convert_to_f(this.avg_in_c);
          this.high_in_f = (convert_to_f(this.high_in_c));
          this.low_in_f = (convert_to_f(this.low_in_c));
      })

  }

}
