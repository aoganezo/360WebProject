import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GalleryComponent} from './gallery/gallery.component';
import { ImageService } from './image/shared/image.service';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsLikedComponent } from './items-liked/items-liked.component';
import { AlertsComponent } from './alerts/alerts.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ProfileComponent } from './profile/profile.component';
import { LikedItemServiceService } from './liked-item-service.service';
import { AuthService } from './authService/auth.service';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DashboardComponent,
    ItemsLikedComponent,
    GalleryComponent,
    AlertsComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [
    HttpModule,
    ImageService,
    AuthService,
    LikedItemServiceService,
    HttpClient,
    AngularFireAuth
    // DatabaseService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


