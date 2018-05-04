import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GalleryComponent} from './gallery/gallery.component';
import { ImageService } from './image/shared/image.service'

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsLikedComponent } from './items-liked/items-liked.component';
import { AlertsComponent } from './alerts/alerts.component';
import {BsDropdownModule} from "ngx-bootstrap/dropdown";
<<<<<<< HEAD
import { ItemDetailComponent } from './item-detail/item-detail.component';
=======
<<<<<<< HEAD
import {ProfileComponent} from './profile/profile.component';
=======
import { LikedItemServiceService } from './liked-item-service.service';
>>>>>>> 366afdb044caeba3a5c7f0e5f26e1ae9746f3e04
>>>>>>> 57ed3723fad03046d7545d2ac9abce2bfa0d3a35

import {AuthService} from './authService/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DashboardComponent,
    ItemsLikedComponent,
    GalleryComponent,
    AlertsComponent,
<<<<<<< HEAD
    ItemDetailComponent,
=======
    ProfileComponent
>>>>>>> 57ed3723fad03046d7545d2ac9abce2bfa0d3a35
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    NgbModule.forRoot()
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
