import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {

  links : string[] = [ 'home', 'about' , 'discover' ]
  activeLink = this.links[0];

  constructor() {
  }
}
