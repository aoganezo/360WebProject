import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

@Injectable()
export class LikedItemServiceService {

  likedItems: Item[] = [];
  // item: Observable<Item | null>;
  // itemCollection: AngularFirestoreCollection<Item>;

  constructor() { // afs: AngularFirestore) {
    // this.likedItems = <any>db.collection('/items').valueChanges();
    // this.itemCollection = this.afs.collection('items');
  }

   getLikedItems(): Observable<Item[]> {
     return of(this.likedItems);
   }

  addLikedItem(image: Item): void {
    this.likedItems.push(image);
    console.log(this.likedItems);
   }

  removeLikedItem(image: Item): void {
    const index = this.likedItems.indexOf(image);
    if (index > -1) {
      this.likedItems.splice(index, 1);
      console.log(this.likedItems);
    }
  }

  // pushFav(itemId: Item): void {
  //   // const id = this.afs.createID();
  //   // itemId.id = id;
  //   // this.booksCollection.add(itemId);
  //   // const collection: AngularFirestoreCollection<Item> = aft.collection('items');
  //   //
  //   // collection.update('');
  //   // collection.delete();
  //
  //   // Notice how the observable is separated from write options
  //
  //   // const collection$: Observable<Item> = collection.valueChanges();
  //   // collection$.subscribe(data => console.log(data));
  //
  // }

}
