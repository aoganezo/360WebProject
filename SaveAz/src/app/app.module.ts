import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {GalleryComponent} from './gallery/gallery.component';
import { ImageService } from './image/shared/image.service';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { SearchbarComponent } from './searchbar/searchbar.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsLikedComponent } from './items-liked/items-liked.component';
import { AlertsComponent } from './alerts/alerts.component';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ProfileComponent} from './profile/profile.component';
import { LikedItemServiceService } from './liked-item-service.service';
import { HttpModule } from '@angular/http';
import { SearchService } from './search-service.service';
import {AuthService} from './authService/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient} from '@angular/common/http';
import { DatabaseService } from './database.service';
import {AngularFireModule} from 'angularfire2';
import { environment } from '../environments/environment';
import {AngularFireDatabaseModule} from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    //SearchbarComponent,
    DashboardComponent,
    ItemsLikedComponent,
    GalleryComponent,
    AlertsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    NgbModule.forRoot(),
    HttpClientModule,
    HttpModule,
    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFireDatabaseModule,
  ],
  providers: [
    HttpModule,
    ImageService,
    AuthService,
    LikedItemServiceService,
    HttpClient,
    // DatabaseService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }


