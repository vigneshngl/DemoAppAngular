import { Component, OnInit } from '@angular/core';
import { ForecastService } from '../forecast.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  constructor(private forecastService : ForecastService) { }

  ngOnInit(): void {
    this.forecastService.dailyforecast().subscribe(
      data => { console.log(data)
      let temp_max = data[0]['list'].map(data => data.main['temp_max'])
      let temp_min = data[0]['list'].map(data => data.main['temp_min'])
      console.log(temp_max, temp_min)

      let allDates = data[0]['list'].map(data => data.dt)
      console.log(allDates)

      let weatherDates = []
      allDates.forEach(element => {
        let jsDate = new Date(element * 1000)
        weatherDates.push(jsDate.toLocaleTimeString('en', { year:'numeric', month:'short', day: 'numeric' }))
      });
      console.log(weatherDates)      

      let newChart = new Chart("canvas", {
        type: 'line',
        data: {
          labels: weatherDates,
          datasets: [
            {
              data: temp_max,
              borderColor: "red",
              fill: false,
              label: "Maximum Temperature"
            },
            {
              data: temp_min,
              borderColor: "blue",
              fill: false,
              label: "Minimum Temperature"
              }
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{ display: true }],
            yAxes: [{ display: true }]
          }
        }
      })

    })
  }

}
