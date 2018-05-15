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

	 likeItem($event,image:Object[]){
	 	this.itemService.addLikedItem(image);
		$event.target.class = "unlike";
		$event.target.innerHTML = "Liked!";
		$event.target.click = this.unlikeItem($event,image);
	 	//button.ng-click = "unlikeItem(image)";
	 }
	//
	 unlikeItem($event,image:Object[]){
	 	this.itemService.removeLikedItem(image);
     $event.target.class = "like";
     $event.target.innerHTML = "Like";
     $event.target.click = this.likeItem($event,image);
	 	//button.ng-click = "likeItem(image)";
	 }
}
