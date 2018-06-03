import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import {Observable} from 'rxjs/Observable';
// import { Item } from 'Item';


@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {
  title = 'Gallery';
  visibleImages: Observable<Item[]>;

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }

}
