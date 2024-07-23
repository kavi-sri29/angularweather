import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/services/weather/weather.service';

@Component({
  selector: 'app-weather-data',
  templateUrl: './weather-data.component.html',
  styleUrls: ['./weather-data.component.css']
})
export class WeatherDataComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  weather: any;
  city: string = 'Tiruchirapalli';

  getWeather() {
    this.weatherService.getWeather(this.city).subscribe(
      data => this.weather = data,
      error => console.log(error)
    );
  }




  ngOnInit(): void {
    this.getWeather();
  }

}
