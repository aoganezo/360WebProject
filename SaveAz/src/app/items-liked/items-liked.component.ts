import { Component, OnInit } from '@angular/core';
import { LikedItemServiceService } from '../liked-item-service.service';

@Component({
  selector: 'app-items-liked',
  templateUrl: './items-liked.component.html',
  styleUrls: ['./items-liked.component.css']
})
export class ItemsLikedComponent implements OnInit {

	likedItems = []

  constructor(public itemService : LikedItemServiceService) { }

  ngOnInit() {
	  this.itemService.getLikedItems()
	  .subscribe(likedItems => this.likedItems = likedItems);
  }

}
