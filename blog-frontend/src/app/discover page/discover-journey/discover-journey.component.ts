import {Component, OnInit} from '@angular/core';
import {Card} from "../../interfaces/card";
import {UserFilter} from "../../interfaces/user-filter";
import {FilterService} from "../../services/filter.service";
import {DataService} from "../../services/data.service";
import {SelectionService} from "../../services/selection.service";

@Component({
  selector: 'app-discover-journey',
  templateUrl: './discover-journey.component.html',
  styleUrls: ['./discover-journey.component.scss']
})
export class DiscoverJourneyComponent implements OnInit {
  tags: UserFilter[] = Object.values(UserFilter);
  cards: Card[] = [];

  get selectedOptions() {
    return this._selectionService.selectedElementsWithCategory
  }

  constructor(private filterService: FilterService, private _dataService: DataService, private _selectionService: SelectionService) {
    filterService.isSearched$.subscribe(() => {
      this.updateDisplayedCards()
    })
  }

  ngOnInit() {
    this._dataService.getAllJourneys().subscribe({
      next: data => {
        data.forEach(
          d => {
            const card: Card = {
              title: d.name,
              description: d.description,
              month: d.month,
              tags: d.tags
            };
            this.cards.push(card)
          })
      },
      error: err => {
        console.error('There was an error!', err.name);
      }
    })
  }


  openFilter(): boolean {
    this.filterService.openFilter();
    return true;
  }

  updateDisplayedCards() {
    this.cards = [];
    const arr: string[] = []
    this.selectedOptions.forEach(c => {
      c.elements
      arr.push(c.elements.toString())
    })

    this._dataService.getAllJourneysWithTags(arr).subscribe({
      next: data => {
        data.forEach(d => {
          const card: Card = {
            title: d.name,
            description: d.description,
            month: d.month,
            tags: d.tags
          };

          this.cards.push(card)
        })
      },
      error: err => console.error('There was an error!', err.name)
    })
  }
}
