import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PostenPage } from '../pages/posten/posten';
import { RanglistePage } from '../pages/rangliste/rangliste';
import { TeilnehmerPage } from '../pages/teilnehmer/teilnehmer';
import { PostendetailPage } from '../pages/postendetail/postendetail';
import {AngularFireDatabaseModule} from 'angularfire2/database'; 
import {AngularFireModule} from 'angularfire2';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PostenServiceProvider } from '../providers/posten-service/posten-service';
import { TeilnehmerServiceProvider } from '../providers/teilnehmer-service/teilnehmer-service';
import { ResultatServiceProvider } from '../providers/resultat-service/resultat-service';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAHYqg1dms1XFObxThuA3_rQWS4X8YybTs",
    authDomain: "postenlauf-e372d.firebaseapp.com",
    databaseURL: "https://postenlauf-e372d.firebaseio.com",
    projectId: "postenlauf-e372d",
    storageBucket: "postenlauf-e372d.appspot.com",
    messagingSenderId: "431303393950"
  };



@NgModule({
  declarations: [
    MyApp,
    PostenPage,
    RanglistePage,
    TeilnehmerPage,
    PostendetailPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule, 
    AngularFireModule.initializeApp(config), 
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PostenPage,
    RanglistePage,
    TeilnehmerPage,
    PostendetailPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PostenServiceProvider,
    TeilnehmerServiceProvider,
    ResultatServiceProvider,
    PostenServiceProvider,
    ResultatServiceProvider,
    TeilnehmerServiceProvider
  ]
})
export class AppModule {}
