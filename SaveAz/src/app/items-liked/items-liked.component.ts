import { Component, OnInit } from '@angular/core';
import { LikedItemServiceService } from '../liked-item-service.service';
import {GalleryComponent} from '../gallery/gallery.component';
import {ImageService} from '../image/shared/image.service';
import * as Chart from 'chart.js';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-items-liked',
  templateUrl: './items-liked.component.html',
  styleUrls: ['./items-liked.component.css']
})
export class ItemsLikedComponent implements OnInit {
  visibleImages: Item[];
  imageService: ImageService;
  chart: Chart;
  productNames: any[];
  allRatings: number[];
  allPrices: number[];
  likedItems: Item[] = [];

  constructor(private iService: ImageService, public itemService: LikedItemServiceService, private modalService: NgbModal) {
    this.imageService = iService;
  }

  ngOnInit() {
    this.likedItems = [];
    this.itemService.getLikedItems()
      .subscribe(likedItems => this.likedItems = likedItems);
    this.visibleImages = this.likedItems;
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
    });
    this.generateChart();
  }

  likeItem(id, image: Item) {
    console.log(this.likedItems);
    /*const index = this.likedItems.indexOf(image);
    if (index === -1) {
      this.likedItems.push(image);
    }*/
    const likeId = 'like'.concat(id);
    const unlikeId = 'unlike'.concat(id);
    this.itemService.addLikedItem(image);
    const likeButton = document.getElementById(likeId);
    const unlikeButton = document.getElementById(unlikeId);
    likeButton.hidden = true;
    likeButton.style.display = 'none';
    unlikeButton.hidden = false;
    unlikeButton.style.display = 'true';
  }

  unlikeItem(id, image: Item) {
    console.log(this.likedItems);
    /*const index = this.likedItems.indexOf(image);
    if (index > -1) {
      this.likedItems.splice(index, 1);
      console.log(this.likedItems);
    }*/

    console.log(id);
    const likeId = 'like'.concat(id);
    const unlikeId = 'unlike'.concat(id);
    this.itemService.removeLikedItem(image);
    console.log('removed from service');
    const likeButton = document.getElementById(likeId);
    const unlikeButton = document.getElementById(unlikeId);
    likeButton.hidden = false;
    likeButton.style.display = 'inline';
    unlikeButton.hidden = true;
    unlikeButton.style.display = 'none';
    console.log('unlike completed');
  }

  isLiked(image: Item): boolean {
    const setOfItems = new Set<Item>(this.likedItems);
    // console.log('>' + image + '<' + ': ' + (this.likedItems.includes(image)));
    let liked = false;
    setOfItems.forEach(function(item) {
      if (item.id === image.id) {
        liked = true;
      }
    });
    return liked;
  }

  generateChart() {
    this.imageService.getImages()
      .subscribe(res => {
        this.productNames = this.visibleImages.map(res1 => res1.name);
        this.allRatings = res.map(res1 => Number(res1.rating));
        this.allPrices = res.map(res1 => Number(res1.price));
        this.loadPriceChart();
      });
  }

  loadPriceChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const canvas = document.getElementsByTagName('canvas');
    const ctx = canvas[0].getContext('2d');

    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.productNames,
        datasets: [
          {
            data: this.allPrices,
            backgroundColor: 'yellow',
            borderColor: 'black',
            borderWidth: 1
          }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Prices'
            }
          }],
          xAxes: [{
            display: false,
            ticks: {
              autoSkip: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Products'
            },

          }]
        },
      }
    });
    const RatingButton = document.getElementById('showRatings');
    const PriceButton = document.getElementById('showPrices');
    RatingButton.style.display = 'inline';
    PriceButton.style.display = 'none';
  }

  loadRatingChart() {
    if (this.chart) {
      this.chart.destroy();
    }
    const canvas = document.getElementsByTagName('canvas');
    const ctx = canvas[0].getContext('2d');
    this.chart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.productNames,
        datasets: [{
          data: this.allRatings,
          backgroundColor: 'blue',
          borderColor: 'black',
          borderWidth: 1
        }]
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },

        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            scaleLabel: {
              display: true,
              labelString: 'Rating'
            }
          }],
          xAxes: [{
            display: false,
            ticks: {
              autoSkip: false
            },
            scaleLabel: {
              display: true,
              labelString: 'Products'
            },

          }]
        }
      }
    });
    const RatingButton = document.getElementById('showRatings');
    const PriceButton = document.getElementById('showPrices');
    RatingButton.style.display = 'none';
    PriceButton.style.display = 'inline';
  }
}
