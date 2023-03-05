import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {DiscoverJourneyComponent} from './discover-journey/discover-journey.component';
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {CardJourneyComponent} from './card-journey/card-journey.component';
import {TagComponent} from './tag/tag.component';
import {CarouseleComponent} from './carousele/carousele.component';
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from "@angular/material/list";
import {FormsModule} from "@angular/forms";
import { BrowseComponent } from './browse/browse.component';
import { FilterComponent } from './filter/filter.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DiscoverJourneyComponent,
    HomeComponent,
    NavBarComponent,
    CardJourneyComponent,
    TagComponent,
    CarouseleComponent,
    BrowseComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatListModule,
    FormsModule,
    MatSidenavModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
