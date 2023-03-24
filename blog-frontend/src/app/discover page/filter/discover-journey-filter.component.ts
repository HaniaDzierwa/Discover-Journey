import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FilterService} from "../../services/filter.service";
import {ExpendedEventInterface} from "../../interfaces/ExpendedEventInterface";
import {FilterOptionInterface, filterOptionsMap} from "../../interfaces/FilterOption";
import {SelectionService} from "../../services/selection.service";
import {getBadgeColor} from "../../interfaces/badge";


@Component({
  selector: 'app-discovery-journey-filter',
  templateUrl: './discover-journey-filter.component.html',
  styleUrls: ['./discover-journey-filter.component.scss']
})


export class DiscoverJourneyFilterComponent implements OnInit, OnDestroy {
  @ViewChild('filter') filter!: any

  get selectedOptions() {
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

  ngOnDestroy() {
    this.selectionService.clean()
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

  getBadgeColor(category: string) {
    return this.color = getBadgeColor(category).backgroundColor
  }

  displaySelectedCards() {
    this.sideNavService.updateSelectedCards();
  }
}


