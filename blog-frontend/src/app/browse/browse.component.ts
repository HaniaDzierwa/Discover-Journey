import {Component, Input} from '@angular/core';
import {UserFilter} from "../interfaces/user-filter";

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent {
  @Input() tags: UserFilter[] = []
  selectPlaceholder: string = "Browse by"
}
