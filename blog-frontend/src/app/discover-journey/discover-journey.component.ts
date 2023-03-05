import {Component, OnInit} from '@angular/core';
import {Card} from "../interfaces/card";
import {UserFilter} from "../interfaces/user-filter";

@Component({
  selector: 'app-discover-journey',
  templateUrl: './discover-journey.component.html',
  styleUrls: ['./discover-journey.component.scss']
})
export class DiscoverJourneyComponent implements OnInit {
  tags: UserFilter[] = Object.values(UserFilter)
  cards: Card[] = [];


  ngOnInit() {
    this.cards = [
      {
        title: "Moja pierwsza podroz",
        description: "taka o sobie podroz",
        tags: ["CHILL", "FUN"]

      },
      {
        "title": "Moja druga podroz",
        "description": "taka o sobie podroz",
        "tags": ["CHILL", "FUN"]

      }
    ];
  }

}
