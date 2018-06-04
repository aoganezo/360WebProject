import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {ScalarObservable} from 'rxjs/Observable/ScalarObservable';
import { of } from 'rxjs/observable/of';
import {} from 'jasmine';
// import { Item } from 'Item';

@Injectable()
export class ImageService {
  constructor(private http: HttpClient) {}

    getImages(): Observable<Item[]> {
      return ImagesArray;
    }

    searchIS(url: string) {
      ImagesArray.value.length = 0;
      console.log('passed on url: ' + url);
      this.http.get(url).subscribe( res => {
         //console.log(JSON.parse(JSON.stringify(res)).items);
         res = JSON.parse(JSON.stringify(res)).items;
         const numItems = JSON.parse(JSON.stringify(res)).length;
         console.log('numItems: ' + numItems);
         for (let numItem = 0; numItem < numItems; numItem++) {
           ImagesArray.value.push({
             'id' : res[numItem].itemId,
             'name' : <string>res[numItem].name,
             'price' : res[numItem].salePrice,
             'url' : res[numItem].largeImage,
             'description' : res[numItem].shortDescription,
             'rating' : res[numItem].customerRating,
           });
           //console.log(ImagesArray);
         }
       });
    }

    checkIsFavorite() { }
}

const ImagesArray: ScalarObservable<Item[]> =
  of([]) as ScalarObservable<Item[]>;
