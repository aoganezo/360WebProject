import { Component, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { LikedItemServiceService } from '../liked-item-service.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Chart} from 'chart.js';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {
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
    this.getItems();
    this.itemService.getLikedItems()
      .subscribe(res => {
        this.likedItems = res;
      });
  }

  getItems() {
    console.log('test getItems()');
    this.imageService.getImages().subscribe(visibleImages => this.visibleImages = visibleImages);
  }

  open(content) {
    this.modalService.open(content).result.then((result) => { });
    this.generateChart();
  }

  likeItem(id, image: Item) {
    const likeId = 'like'.concat(id);
    const unlikeId = 'unlike'.concat(id);
    this.itemService.addLikedItem(image);
    /* const likeButton = document.getElementById(likeId);
    const unlikeButton = document.getElementById(unlikeId);
    likeButton.style.display = 'none';
    unlikeButton.style.display = 'inline'; */
  }

  unlikeItem(id, image: Item) {
    const index = this.likedItems.indexOf(image);
    if (index > -1) {
      this.likedItems.splice(index, 1);
      console.log(this.likedItems);
    }

    console.log(id);
    const likeId = 'like'.concat(id);
    const unlikeId = 'unlike'.concat(id);
    this.itemService.removeLikedItem(image);
    console.log('removed from service');
    /* const likeButton = document.getElementById(likeId);
    const unlikeButton = document.getElementById(unlikeId);
    likeButton.style.display = 'inline';
    unlikeButton.style.display = 'none';
    console.log('unlike completed'); */
  }

  isLiked(image: Item): boolean {
    // let i: number;
    console.log(this.likedItems);
    return this.likedItems.includes(image);

    /* for ( i = 0 ; i < this.likedItems.length ; i++) {
      // console.log(likedItems[i].name + ': ' + image.name + ': ' + (likedItems[i].name === image.name));
      if (this.likedItems[i].name === image.name) {
        return true;
      }
    }
    return false; */
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
      data : {
        labels : this.productNames,
        datasets : [
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
              beginAtZero : true
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
