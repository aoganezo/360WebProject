import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {AuthService} from './authService/auth.service';

@Injectable()
export class LikedItemServiceService {

  itemsCol: AngularFirestoreCollection<Item>;
  items: Observable<any[]>;

  likedItems: Item[] = [];

  constructor(
    private db: AngularFirestore,
    public auth: AuthService
  ) {
    this.itemsCol = this.db.collection('items');

  }

   getLikedItems(): Observable<Item[]> {
     return of(this.likedItems);
   }

  addLikedItem(image: Item): void {
    this.likedItems.push(image);
    // console.log("uid: "+this.auth.userProfile.uid.toString())
    // console.log((JSON).parse("profile: "+this.auth.userProfile).toString());
    // for ( let prop in this.auth.userProfile) {
    //   console.log( 'Obj ' + prop );
    // }
    // console.log("wat");
    console.log('sub: ' + this.auth.userProfile.sub);
    let temp = this.auth.userProfile.sub.toString();


    this.db.collection(temp).doc(image.id.toString()).set(image);
    console.log(this.likedItems);
  }

  removeLikedItem(image: Item): void {
    const index = this.likedItems.indexOf(image);
    if (index > -1) {
      this.likedItems.splice(index, 1);
      console.log(this.likedItems);
    }
    this.db.collection('items').doc(image.id.toString()).delete();
  }
}
