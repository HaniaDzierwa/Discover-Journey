import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {DiscoverJourneyComponent} from "./discover-journey/discover-journey.component";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "discover", component: DiscoverJourneyComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
