import { Component, OnInit } from '@angular/core';

import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor(private _citiesService: CitiesService) { }

  getCitySpecificWeatherData() {
      this._citiesService.retrieveCitySpecific
  }

  ngOnInit() {
  }

}
