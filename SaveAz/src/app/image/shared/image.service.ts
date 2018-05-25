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
      ImagesArray.value.length = 0;
      console.log('passed on url: ' + url);
      this.http.get(url).subscribe( res => {
         console.log(JSON.parse(JSON.stringify(res)).items);
         res = JSON.parse(JSON.stringify(res)).items;
         console.log(res);
        ImagesArray.value.push({
          'id' : 1,
          'name' : <string>res[0].name,
          'price' : res[0].msrp,
          'url' : res[0].largeImage,
          'description' : res[0].shortDescription
          });
        console.log(ImagesArray);
      });
    }
}

const ImagesArray: Observable<Item[]> = of([

]);
