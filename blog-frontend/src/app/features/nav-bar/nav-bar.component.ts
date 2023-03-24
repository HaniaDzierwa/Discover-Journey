import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  links : string[] = [ 'home', 'discover', 'about' ]

  //TODO maybe check if page is open and use it to activeLink ? now after reload always home is checked
  activeLink = this.links[0];

  constructor() {
  }
}
