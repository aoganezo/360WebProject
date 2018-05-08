import { Component, OnChanges } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { LikedItemServiceService } from '../liked-item-service.service';
import {Router} from '@angular/router';
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent{
    title = 'Gallery';
    visibleImages: any[] = [];

    constructor(private imageService: ImageService, public itemService : LikedItemServiceService){
        this.visibleImages = this.imageService.getImages();
    }

    openItemDetail(_router:Router) {
     // this._router.navigate(["../Dashboard"]);
    }

	// likeItem(image:[]){
	// 	this.itemService.addLikedItem(image);
	// 	button = document.getElementById("like");
	// 	button.innerHTML = "Unlike";
	// 	button.ng-click = "unlikeItem(image)";
	// }
	//
	// unlikeItem(image:[]){
	// 	this.itemService.removeLikedItem(image);
	// 	button = document.getElementById("like");
	// 	button.innerHTML = "Like";
	// 	button.ng-click = "likeItem(image)";
	// }
}
