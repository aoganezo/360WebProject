import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
	
	title = 'Gallery';
    visibleImages: any[] = [];
	
  constructor(private imageService: ImageService) { 
  this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

}
