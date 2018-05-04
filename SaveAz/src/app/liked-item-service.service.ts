import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class LikedItemServiceService {

	likedItems = [];

  constructor() { }

  // getLikedItems(): Observable<[]>{
	//   return of(likedItems);
  // }
  //
  // addLikedItem(image:[]):void{
	//   likedItems.push(image);
  // }
  //
  // RemoveLikedItem(image:[]):void{
	//   int index = indexOf(image);
	//   if(index > -1){
	// 	likedItems.splice(index);
	//   }
  // }

}
