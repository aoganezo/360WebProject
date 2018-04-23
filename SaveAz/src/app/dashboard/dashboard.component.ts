import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  fullImagePath: string;

  constructor() {
    this.fullImagePath = '../assets/img/SaveAZ.jpg'
  }

  ngOnInit() {
  }

}
