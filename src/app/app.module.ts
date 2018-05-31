import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnuncioProvider } from '../providers/anuncio/anuncio';
import { AnuncioPage } from '../pages/anuncio/anuncio';
import { CrearAnuncioPage } from '../pages/crear-anuncio/crear-anuncio';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AnuncioPage,
    CrearAnuncioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    AnuncioPage,
    CrearAnuncioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AnuncioProvider
  ]
})
export class AppModule {}
