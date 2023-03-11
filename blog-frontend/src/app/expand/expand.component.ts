import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ExpendedEventInterface} from "../interfaces/ExpendedEventInterface";

@Component({
  selector: 'app-expand',
  templateUrl: './expand.component.html',
  styleUrls: ['./expand.component.scss']
})
export class ExpandComponent {
  @Input() title = '';
  @Output() expandedEvent = new EventEmitter<ExpendedEventInterface>();
  expanded: boolean = false;

  expand() {
    this.expanded = !this.expanded;
    this.expandedEvent.emit({title: this.title, expended: this.expanded});
    return this.expanded;
  }
}
