import { Component, OnChanges, OnInit } from '@angular/core';
import { ImageService } from '../image/shared/image.service';
import { LikedItemServiceService } from '../liked-item-service.service';
import {Router} from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.component.html',
    styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit{
    title = 'Gallery';
    visibleImages: any[] = [];

    constructor(private imageService: ImageService, public itemService : LikedItemServiceService, private modalService: NgbModal){
        this.visibleImages = this.imageService.getImages();
    }

	ngOnInit() { }

	open(content) {
		this.modalService.open(content).result.then((result) => {
		  //this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
		  //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
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
