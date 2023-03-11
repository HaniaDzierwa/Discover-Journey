import {Component, OnInit} from '@angular/core';
import {Card} from "../interfaces/card";
import {UserFilter} from "../interfaces/user-filter";
import {FilterService} from "../filter.service";

@Component({
  selector: 'app-discover-journey',
  templateUrl: './discover-journey.component.html',
  styleUrls: ['./discover-journey.component.scss']
})
export class DiscoverJourneyComponent implements OnInit {
  tags: UserFilter[] = Object.values(UserFilter)
  cards: Card[] = [];

  constructor(private filterService: FilterService) {
  }

  ngOnInit() {
    this.cards = [
      {
        title: "Moja pierwsza podroz",
        description: "taka o sobie podroz",
        tags: new Set ( ["CHILL", "FUN"])

      },
      {
        title: "Moja druga podroz",
        description: "taka o sobie podroz",
        tags: new Set (["CHILL", "FUN"])

      }
    ];
  }

  openFilter(): boolean {
    this.filterService.openFilter();
    return true;
  }

}
