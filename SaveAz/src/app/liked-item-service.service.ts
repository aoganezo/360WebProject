import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

// import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
// import { AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';

@Injectable()
export class LikedItemServiceService {

  likedItems: Object[] = [];
  // item: Observable<Item | null>;
  // itemCollection: AngularFirestoreCollection<Item>;

  constructor() { // afs: AngularFirestore) {
    // this.likedItems = <any>db.collection('/items').valueChanges();
    // this.itemCollection = this.afs.collection('items');
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
}
