import { Component, OnInit, } from '@angular/core';
import {AuthService} from '../authService/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})



export class DashboardComponent implements OnInit {
  fullImagePath: string;

  constructor(private auth: AuthService) {
    auth.handleLoginCallback();
  }

  ngOnInit() {
  }

}
