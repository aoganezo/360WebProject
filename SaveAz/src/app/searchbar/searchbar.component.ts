import { Component } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent{
  apiRoot: string = "http://itunes.apple.com/search"; 
  results:Object[];
  loading: boolean;

  constructor(private http: Http) { 
    this.results =[];
    this.loading = false;
  }  

  search(){
    console.log();
    let url = '$(this.apiRoot)/get';
    this.http.get(url).subscribe(res => console.log(res.text()));

  }

}
