import { Component, OnInit, Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

@Injectable()
export class SearchbarComponent implements OnInit {

  apiRoot:string = 'https://itunes.apple.com/search';
  results:Object[];
  loading:boolean;

  constructor(private http:Http) {
    this.results = [];
    this.loading = false;
  }

  search(term:string) {
    console.log("GET");
    let url = `${this.apiRoot}/get`;
    this.http.get(url).subscribe(res => console.log(res.text()));
  }

  ngOnInit() {
  }

}
