import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {DiscoverJourneyComponent} from './discover page/discover-journey/discover-journey.component';
import {HomeComponent} from './home/home.component';
import {NavBarComponent} from './features/nav-bar/nav-bar.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {CardJourneyComponent} from './discover page/card-journey/card-journey.component';
import {BadgeComponent} from './features/badge/badge.component';
import {CarouseleComponent} from './features/carousele/carousele.component';
import {MatSelectModule} from "@angular/material/select";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatListModule} from "@angular/material/list";
import {FormsModule} from "@angular/forms";
import {BrowseComponent} from './features/browse/browse.component';
import {DiscoverJourneyFilterComponent} from './discover page/filter/discover-journey-filter.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatTableModule} from "@angular/material/table";
import {MatIconModule} from "@angular/material/icon";
import {DiscoverComponent} from './discover page/discover/discover.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {TableFilterJourneyComponent} from './discover page/table-filter-journey/table-filter-journey.component';
import {MatInputModule} from "@angular/material/input";
import {ExpandComponent} from './features/expand/expand.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    DiscoverJourneyComponent,
    HomeComponent,
    NavBarComponent,
    CardJourneyComponent,
    BadgeComponent,
    CarouseleComponent,
    BrowseComponent,
    DiscoverJourneyFilterComponent,
    DiscoverComponent,
    TableFilterJourneyComponent,
    ExpandComponent
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
    MatTableModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
