import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GalleryComponent} from './gallery/gallery.component';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsLikedComponent } from './items-liked/items-liked.component';
import { AlertsComponent } from './alerts/alerts.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    DashboardComponent,
    ItemsLikedComponent,
    GalleryComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
