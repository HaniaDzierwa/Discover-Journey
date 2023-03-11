import {Component, ViewChild} from '@angular/core';
import {FilterService} from "../filter.service";
import {Tag} from "../interfaces/tag";
import {Duration} from "../interfaces/duration";
import {ExpendedEventInterface} from "../interfaces/ExpendedEventInterface";
import {FilterOptionInterface, filterOptionsMap} from "../interfaces/FilterOption";
import {SelectionService} from "../selection.service";
import {TableFilterJourneyComponent} from "../table-filter-journey/table-filter-journey.component";
import {SelectedOptionsForCategory} from "../interfaces/selected-options-for-category";


@Component({
  selector: 'app-discovery-journey-filter',
  templateUrl: './discover-journey-filter.component.html',
  styleUrls: ['./discover-journey-filter.component.scss']
})


export class DiscoverJourneyFilterComponent {
  @ViewChild('filter') filter!: any



  //selectedOption: string[] = []
  get selectedOptions() {
    return this.selectionService.selectedElements;
  }

  selectedA: Array<Array<string>> = [[]];

  filterOptions: FilterOptionInterface[] = Array.from(filterOptionsMap).map(([key, value]) => {
    const element: FilterOptionInterface = {
      title: key,
      expended: false,
      data: Object.values(value).map(e => ({name: e}))
    };
    return element;
  });

  constructor(private sideNavService: FilterService, private selectionService: SelectionService,
  ) {
    this.sideNavService.filterOpened$.subscribe((status) => this.handleSideFilter(status))

    //this.selectedOption = tableFilterJourneyComponent.getSelectedOptions();
    // this.selectedOptionsService.items$.subscribe(items => {
    //   this.selectedOption = this.selectedOption.concat(items);
    // });
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

  getSelectedOptions(selectedOptions: SelectedOptionsForCategory) {
    //
    //
    // const newArray = this.selectedOption.filter((value) => {
    //   return selectedOptions.includes(value);
    // });
    //
    // this.selectedOption.length = 0;
    // newArray.forEach((value) => {
    //   this.selectedOption.push(value);
    // });
    //
    // this.selectedOption = selectedOptions.concat(this.selectedOption)
    // var selectedA: Array<Array<string>> =[[]];
    var n = Array<SelectedOptionsForCategory>()

// this.filterOptions.forEach(value => {
//   if(value.title == selectedOptions.title) {   //mam ten sam tytul
//      = selectedOptions.selectedOptions;
//     this.selectedA.push(selected);
//   }
// })

    // n.forEach(v => {
    //   v.title = 'Tag'
    // })

    n.forEach(v => {
      if (v.title == selectedOptions.title) {
        v.selectedOptions = selectedOptions.selectedOptions
      }
    })

    //console.log(selectedOptions)
    console.log(n)
    var nowa: string[] = []
    n.forEach(v => {
      v.selectedOptions.forEach(b => {
        nowa.push(b)
      })
    });

    console.log(nowa)

   // this.selectedOption = nowa;

    // var selectedOption = n.reduce((accumulator, currentValue) => {
    //   return accumulator.concat(currentValue.selectedOptions)
    //  })
// selectedOptions.selectedOptions;
// selectedOptions.title
//
//     const newArray = this.selectedOption.filter((value) => {
//       return selectedOptions.includes(value);
//     });
//
//     const uniqueValues = selectedOptions.filter((value) => {
//       return !this.selectedOption.includes(value);
//     });
//
//     this.selectedOption.length = 0;
//     this.selectedOption.push(...newArray.concat(uniqueValues));
//
//     const uniqueSelectedOptions = this.selectedOption.filter((
//       value, index, array
//     ) =>
//       array.indexOf(value) === index);
//     this.selectedOption = uniqueSelectedOptions
  }
}

