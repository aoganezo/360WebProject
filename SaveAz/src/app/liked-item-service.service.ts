import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {AngularFirestore} from 'angularfire2/firestore';
import { AngularFirestoreModule } from 'angularfire2/firestore';

@Injectable()
export class LikedItemServiceService {

  likedItems: Object[] = [];

  constructor(db: AngularFirestore) {
    this.likedItems = <any>db.collection('/items').valueChanges();
  }

   getLikedItems(): Observable<Object[]> {
     return of(this.likedItems);
   }

  addLikedItem(image: Object[]): void {
    this.likedItems.push(image);
    console.log(this.likedItems);
   }

  removeLikedItem(image: Object[]): void {
    const index = this.likedItems.indexOf(image);
    if (index > -1) {
      this.likedItems.splice(index);
      console.log(this.likedItems);
    }
  }

  pushFav(id): void {
//     const collection: AngularFirestoreCollection<Item> = aft.collection('items');
//
//     collection.update(data);
//     collection.delete();
//
// // Notice how the observable is separated from write options
//
//     const collection$: Observable<Item> = collection.valueChanges();
//     collection$.subscribe(data => console.log(data));

  }

}
