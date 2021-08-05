import { ProfilePage } from './profile/profile.page';
import { GlobalMethods } from './services/global';
import { DatabaseService } from './services/database.service';
import { AuthServiceService } from './services/auth-service.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicRatingModule } from 'ionic4-rating';
//Firebase Imports
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireStorageModule } from '@angular/fire/storage'
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';import { FormsModule } from '@angular/forms';

import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {Screenshot} from '@ionic-native/screenshot/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,IonicRatingModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireStorageModule, // imports firebase/storage only needed for storage features,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  AuthServiceService,
  DatabaseService,
  GlobalMethods,
  SocialSharing,
  Screenshot,
  ProfilePage,
  AppComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
