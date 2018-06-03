import { Component } from '@angular/core';
import {AuthService} from './authService/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  imgPath = '../assets/img/SaveAZ.jpg';

  constructor(public auth: AuthService) {
    auth.handleLoginCallback();
  }
}
