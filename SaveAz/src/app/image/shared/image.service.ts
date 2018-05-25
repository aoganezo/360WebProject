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
      let res;
      this.http.get(url).subscribe( res => {
         console.log(JSON.parse(JSON.stringify(res)).items);
         res = JSON.parse(JSON.stringify(res)).items;
         console.log(res);
        // console.log(res.items[0].name);
        // console.log(res.items[0].msrp);
        // console.log(res.items[0].largeImage);
        // console.log(res.items[0].shortDescription);
        ImagesArray.value[0] = {
           'id' : 1,
          'caption' : <string>res[0].name,
          'category' : res[0].msrp,
          'url' : res[0].largeImage,
           'caption' : res[0].shortDescription
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

const ImagesArray: Observable<Item[]> = of([
  {'id': 1, 'category': 'testCategory', 'caption': 'This is a test caption 1', 'url': 'assets/img/product.png'},

]);
