import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'
import { ImageService } from '../image/shared/image.service'
@Component({
  selector: 'app-d3graph',
  templateUrl: './d3graph.component.html',
  styleUrls: ['./d3graph.component.css']
})
export class D3graphComponent implements OnInit {

  chart = [];

  constructor(private imageService : ImageService) {
  }

  ngOnInit() {
    this.imageService.getImages()
      .subscribe(res => {
        let minRating = 0;
        let allRatings = res.map(res =>Number(res.rating))
      })
  }

}
