import { Component } from '@angular/core';
import { ImageService } from '../image/shared/image.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent {
  apiRoot = 'https://cors.now.sh/https://api.walmartlabs.com/v1/search?apiKey=chwytn7wg8t344pf7eebg6sd&numItems=16&query=';
  results: Object[];
  loading: boolean;
  searchSubject: string;
  is: ImageService;

  constructor(is: ImageService) {
    this.results = [];
    this.loading = false;
    this.searchSubject = '';
    this.is = is;
  }

  search() {
    this.searchSubject = (<HTMLInputElement>document.getElementById('searchSubject')).value;
    const url = this.apiRoot + this.searchSubject;
    if (this.searchSubject !== '') {
      console.log('subject: ' + this.searchSubject);
      this.is.searchIS(url);
    }
 }

 keyDownFunction(event) {
  if (event.keyCode === 13) {
    this.search();
  }
}


}

// chwytn7wg8t344pf7eebg6sd
// http://api.walmartlabs.com/v1/search?apiKey=chwytn7wg8t344pf7eebg6sd&&query=


