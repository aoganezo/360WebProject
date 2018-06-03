import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable()
export class LikedItemServiceService{

  itemsCol: AngularFirestoreCollection<Item>;
  items: Observable<any[]>;


  likedItems: Object[] = [];

  constructor(private db: AngularFirestore) {
    this.itemsCol = this.db.collection('items');
  }

   getLikedItems(): Observable<Object[]> {
     return of(this.likedItems);
   }

  addLikedItem(image: Object[]): void {
    this.likedItems.push(image);
    this.db.collection('items').doc('test-add').set(image);
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
