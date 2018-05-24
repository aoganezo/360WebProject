import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { GalleryComponent } from '../../gallery/gallery.component';



@Injectable()
export class ImageService {
    // visibleImages = [];

  constructor(private http: HttpClient) {}

    getImages(): Observable<Item[]> {
        return ImagesArray;

    //   return this.http.get<Hero[]>(this.heroesUrl)
    //     .pipe(
    //       tap(heroes => this.log(`fetched heroes`)),
    //       catchError(this.handleError('getHeroes', []))
    //     );
     }

    // getImageFile(id: number) {
    //     return ImagesArray.slice(0).find(image => image.id === id);
    // }

    searchIS(url: string) {
      console.log('passed on url: ' + url);
      const images = this.http.get(url).subscribe(res => {
        // console.log(res);
        // console.log(res.items[0].name);
        // console.log(res.items[0].msrp);
        // console.log(res.items[0].largeImage);
        // console.log(res.items[0].shortDescription);
        ImagesArray[0] = {
          'id' : 1,
          'caption' : <string>res.items[0].name,
          'category' : res.items[0].msrp,
          'url' : res.items[0].largeImage
          // 'caption' : res.items[0].shortDescription
          };
        console.log(ImagesArray);
      });


      // console.log('x.items: ' + x.items);
      // console.log('x[items]: ' + x[0]);
      // for (let i = 0; i < 10; i++) { //fix
      //
      // }
      // ImagesArray.
    }
}

let ImagesArray: Observable<Item[]> = of([
  {'id': 1, 'category': 'testCategory', 'caption': 'This is a test caption 1', 'url': 'assets/img/product.png'},
  {'id': 2, 'category': 'testCategory', 'caption': 'This is a test caption 2', 'url': 'assets/img/product.png'},
  {'id': 3, 'category': 'testCategory', 'caption': 'This is a test caption 3', 'url': 'assets/img/product.png'},
  {'id': 4, 'category': 'testCategory', 'caption': 'This is a test caption 4', 'url': 'assets/img/product.png'},
  {'id': 5, 'category': 'testCategory', 'caption': 'This is a test caption 5', 'url': 'assets/img/product.png'},
  {'id': 6, 'category': 'testCategory', 'caption': 'This is a test caption 6', 'url': 'assets/img/product.png'},
  {'id': 7, 'category': 'testCategory', 'caption': 'This is a test caption 7', 'url': 'assets/img/product.png'},
  {'id': 8, 'category': 'testCategory', 'caption': 'This is a test caption 8', 'url': 'assets/img/product.png'},
  {'id': 9, 'category': 'testCategory', 'caption': 'This is a test caption 9', 'url': 'assets/img/product.png'},
  {'id': 10, 'category': 'testCategory', 'caption': 'This is a test caption 10', 'url': 'assets/img/product.png'},
  {'id': 11, 'category': 'testCategory', 'caption': 'This is a test caption 11', 'url': 'assets/img/product.png'},
  {'id': 12, 'category': 'testCategory', 'caption': 'This is a test caption 12', 'url': 'assets/img/product.png'},
  {'id': 13, 'category': 'testCategory', 'caption': 'This is a test caption 13', 'url': 'assets/img/product.png'},
  {'id': 14, 'category': 'testCategory', 'caption': 'This is a test caption 14', 'url': 'assets/img/product.png'},
  {'id': 15, 'category': 'testCategory', 'caption': 'This is a test caption 15', 'url': 'assets/img/product.png'},
  {'id': 16, 'category': 'testCategory', 'caption': 'This is a test caption 16', 'url': 'assets/img/product.png'},
]);
