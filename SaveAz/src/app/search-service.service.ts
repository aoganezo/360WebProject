// import { Injectable } from '@angular/core';
// import { Http, Response, RequestOptions, Headers } from '@angular/http';
//
// @Injectable()
// class SearchService {
//   apiRoot:string = 'https://itunes.apple.com/search';
//   results:Object[];
//   loading:boolean;
//
//   constructor(private http:Http) {
//     this.results = [];
//     this.loading = false;
//   }
//
//   search() {
//     console.log("GET");
//     let url = `${this.apiRoot}/get`;
//     this.http.get(url).subscribe(res => console.log(res.text()));
//   }
//
