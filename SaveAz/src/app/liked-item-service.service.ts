import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LikedItemServiceService {

  likedItems = [];

  constructor() { }

   getLikedItems(): Observable<Object[]>{
     return of(this.likedItems);
   }

  addLikedItem(image:Object[]):void{
	  this.likedItems.push(image);
   }

  removeLikedItem(image:Object[]):void{
    let index = this.likedItems.indexOf(image);
	   if(index > -1){
	 	this.likedItems.splice(index);
	  }
   }

}
