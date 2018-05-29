import { Component } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
    selector: 'app-image-detail',
    templateUrl: './image-detail.component.html',
    styleUrls: ['./image-detail.component.css']
})

export class ImageDetailComponent {
    constructor(private imageService: ImageService) {}
}
