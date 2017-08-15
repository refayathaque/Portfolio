import { Component } from '@angular/core';
import { CitiesService } from './cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'East Coast Weather Forecast';

  weather_data = [];

  constructor(private _citiesService: CitiesService) {}

  getWeatherData() {
      this._citiesService.retrieveWeatherData()
        .then(data => { this.weather_data = data })
        .catch(err => { console.log('Error!'); })
}
}
