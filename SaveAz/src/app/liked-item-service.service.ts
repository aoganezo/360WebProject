import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import {AuthService} from './authService/auth.service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class LikedItemServiceService {

  itemsCol: AngularFirestoreCollection<Item>;
  items: Observable<any[]>;

  loading = true;
  error: boolean;

  likedItems: Item[] = [];


  constructor(
    private db: AngularFirestore,
    public auth: AuthService
  ) {
    this.itemsCol = this.db.collection('items');
    this.itemsCol = db.collection<Item>('items', ref => ref.orderBy('timestamp').limit(15));
    this.items = this.itemsCol.snapshotChanges()
      .pipe(map(res => this._onNext(res)), catchError((err, caught) => this._onError(err, caught)));
  }

  private _onNext(res) {
    this.loading = false;
    this.error = false;
    // Add Firestore ID to comments
    // The ID is necessary to delete specific comments
    return res.map(action => {
      const data = action.payload.doc.data() as Comment;
      const id = action.payload.doc.id;
      return { id, ...data };
    });
  }

  private _onError(err, caught): Observable<any> {
    this.loading = false;
    this.error = true;
    return Observable.throw('An error occurred while retrieving comments.');
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
    console.log('sub: ' + this.auth.userProfile.sub);
    const temp = this.auth.userProfile.sub.toString();


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
