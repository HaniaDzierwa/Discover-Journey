import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {

  @Input() tags: Set<string> = new Set<string>();
  @Input() backgroundColor: string = '#000';

  colorek: string = '#fff'
}

