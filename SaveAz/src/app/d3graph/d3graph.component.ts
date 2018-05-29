import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { ImageService } from '../image/shared/image.service'
@Component({
  selector: 'app-d3graph',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.css']
})
export class D3graphComponent implements OnInit {

  chart: Chart;

  constructor(private imageService : ImageService) {
  }

  ngOnInit(){

  }

  generateChart() {
    this.imageService.getImages()
      .subscribe(res => {
        let productNames = res.map(res => res.name);
        let allRatings = res.map(res =>Number(res.rating));

        this.chart = new Chart('canvas',{
          type: 'bar',
          data : {
            labels : productNames,
            datasets : [{
                data: allRatings,
                backgroundColor: 'blue',
                borderColor: 'black',
                borderWidth: 1
              }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero : true
                }
              }]
            }
          }
        })
      })
  }

}
