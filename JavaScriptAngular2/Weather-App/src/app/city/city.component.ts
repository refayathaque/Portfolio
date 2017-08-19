import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../cities.service';
import { Router, ActivatedRoute } from '@angular/router'; // For URL params
import 'rxjs/add/operator/switchMap'; // For getting URL params and using them to make API call

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

    // Dependency injections
    constructor(private _route: ActivatedRoute, private _citiesService: CitiesService) { }

    ngOnInit() {

        this._route.paramMap
            .switchMap(params => {
                return this._citiesService.retrieveCitySpecificWeatherData(params.get('city_id'))
        })
        .subscribe(data => {
            this.city_specific_weather_data = data
            this.city_name = this.city_specific_weather_data.name;
            console.log(this.city_name);
            this.avg_in_c = Math.ceil(data.main.temp);
            console.log(this.avg_in_c);
            this.high_in_c = data.main.temp_max;
            console.log(this.high_in_c);
            this.low_in_c = data.main.temp_min;
            console.log(this.low_in_c);

        // Function within subscribe method bc of reasons dealing with call stacks, we need the function below to run 'OnInit' but it won't work if it's outside the subscribe method's block. Has something to do with order or operations related to stacks and queues, need to look into callbacks and observables to understand this better.
        function convert_to_f(temp_in_c) {
            let f: number;
            f = temp_in_c * 9;
            f /= 5;
            f += 32;
            return Math.ceil(f);
        }
            this.avg_in_f = convert_to_f(this.avg_in_c);
            this.high_in_f = (convert_to_f(this.high_in_c));
            this.low_in_f = (convert_to_f(this.low_in_c));
        })

    }

}
