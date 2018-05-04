import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GalleryComponent} from './gallery/gallery.component';
import { ImageService } from './image/shared/image.service'

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsLikedComponent } from './items-liked/items-liked.component';
import { AlertsComponent } from './alerts/alerts.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
<<<<<<< HEAD
import {ProfileComponent} from './profile/profile.component';
=======
import { LikedItemServiceService } from './liked-item-service.service';
>>>>>>> 366afdb044caeba3a5c7f0e5f26e1ae9746f3e04

import {AuthService} from './authService/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DashboardComponent,
    ItemsLikedComponent,
    GalleryComponent,
    AlertsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot()
  ],
<<<<<<< HEAD
  providers: [
    ImageService,
    AuthService
  ],
=======
  providers: [ImageService, LikedItemServiceService],
>>>>>>> 366afdb044caeba3a5c7f0e5f26e1ae9746f3e04
  bootstrap: [AppComponent]
})
export class AppModule { }
