import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { ImageService } from '../image/shared/image.service'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent {
  apiRoot: string = "https://api.walmartlabs.com/v1/search?apiKey=chwytn7wg8t344pf7eebg6sd&numItems=1&query=";
  results: Object[];
  loading: boolean;
  searchSubject: string;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;
    this.searchSubject = "";
  }

  search() {
    console.log();
    this.searchSubject = document.getElementById("searchSubject").value;
    let url = this.apiRoot + this.searchSubject;
    if (this.searchSubject != "") {
      var x = this.http.get(url).subscribe(res => console.log(res.json()));
      var numItems = x.items.length;
      for (var i = 0; i < numItems; i++) {
        ImageService y = new ImageService();
        y.visibleImages = []

      }
    }
  }
}

// chwytn7wg8t344pf7eebg6sd
// http://api.walmartlabs.com/v1/search?apiKey=chwytn7wg8t344pf7eebg6sd&&query=


