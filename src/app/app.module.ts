import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { PostenPage } from '../pages/posten/posten';
import { RanglistePage } from '../pages/rangliste/rangliste';
import { TeilnehmerPage } from '../pages/teilnehmer/teilnehmer';
import { PostendetailPage } from '../pages/postendetail/postendetail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
