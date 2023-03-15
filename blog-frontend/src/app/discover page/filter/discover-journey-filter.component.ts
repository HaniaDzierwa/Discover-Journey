import {Component, OnInit, ViewChild} from '@angular/core';
import {FilterService} from "../../filter.service";
import {ExpendedEventInterface} from "../../interfaces/ExpendedEventInterface";
import {FilterOptionInterface, filterOptionsMap} from "../../interfaces/FilterOption";
import {SelectionService} from "../../selection.service";
import {getBadgeColor} from "../../interfaces/badge";


@Component({
  selector: 'app-discovery-journey-filter',
  templateUrl: './discover-journey-filter.component.html',
  styleUrls: ['./discover-journey-filter.component.scss']
})


export class DiscoverJourneyFilterComponent implements OnInit {
  @ViewChild('filter') filter!: any

  get selectedOptions() {
    console.log(this.selectionService.selectedElementsWithCategory)
    return this.selectionService.selectedElementsWithCategory
  }

  filterOptions: FilterOptionInterface[] = []
  color: string = '#333'

  constructor(private sideNavService: FilterService, private selectionService: SelectionService,
  ) {
    this.sideNavService.filterOpened$.subscribe((status) => this.handleSideFilter(status))
  }

  ngOnInit() {
    this.filterOptions = Array.from(filterOptionsMap).map(([key, value]) => {
      const element: FilterOptionInterface = {
        title: key,
        expended: false,
        data: Object.values(value).map(e => ({name: e}))
      };
      return element;
    });
  }

  handleSideFilter(state: boolean): void {
    state ? this.filter.open() : this.filter.close();
  }

  getExpended(expendedEvent: ExpendedEventInterface): void {
    this.filterOptions.forEach(value => {
      if (value.title == expendedEvent.title) {
        value.expended = expendedEvent.expended;
      }
    });
  }

  getBadgeColor (category: string) {
    return this.color = getBadgeColor(category).backgroundColor
  }
}


