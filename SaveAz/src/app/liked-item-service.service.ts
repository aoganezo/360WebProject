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
  likedItemSet: Set<Item> = new Set<Item>();


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
    console.log('Observable created');
    this.likedItems = [];
    return of(this.getDBResults());
   }

   getDBResults(): Item[] {
    console.log('getDBResults called');
    const temp = this.auth.userProfile.sub.toString();
    this.db.collection(temp).snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = <Item> a.payload.doc.data();
        // console.log(data);
        const id = a.payload.doc.id;
        // console.log(id);
        // this.likedItems.push(data);

        return { id, ...data };
      });
    }).subscribe((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.likedItems.push(doc);
        });
    });
    return this.likedItems;
   }

  addLikedItem(image: Item): void {
    // this.likedItems.push(image);
    const temp = this.auth.userProfile.sub.toString();
    console.log('sub: ' + temp);
    this.db.collection(temp).doc(image.id.toString()).set(image);
    // console.log(this.likedItems);
  }

  removeLikedItem(image: Item): void {
    const index = this.likedItems.indexOf(image);
    const temp = this.auth.userProfile.sub.toString();
    if (index > -1) {
      this.likedItems.splice(index, 1);
      console.log(this.likedItems);
    }
    this.db.collection(temp).doc(image.id.toString()).delete();
  }
}
