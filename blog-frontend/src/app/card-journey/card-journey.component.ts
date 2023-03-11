import {Component, Input} from '@angular/core';
import {Card} from "../interfaces/card";

@Component({
  selector: 'app-card-journey',
  templateUrl: './card-journey.component.html',
  styleUrls: ['./card-journey.component.scss']
})
export class CardJourneyComponent {
  @Input() card: Card = {title: '', description: '', tags:  new Set<string>()}
}
