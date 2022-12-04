import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Navigation components
import { PageOneComponent } from './navbar/page-one.component';
import { PageTwoComponent } from './navbar/page-two.component';
import { PageThreeComponent } from './navbar/page-three.component';

@NgModule({
  declarations: [AppComponent, PageOneComponent, PageTwoComponent, PageThreeComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
