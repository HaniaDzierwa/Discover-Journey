import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AboutComponent } from './about/about.component';
import { DiscoverJourneyComponent } from './discover-journey/discover-journey.component';
import { AppRoutingModule } from "./app-routing.module";
import {SlickCarouselModule } from 'ngx-slick-carousel'
import {MatTabsModule} from "@angular/material/tabs";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    DiscoverJourneyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
