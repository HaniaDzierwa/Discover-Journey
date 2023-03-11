import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {filterOptionsMap, Options} from "./interfaces/FilterOption";
import {Tag} from "./interfaces/tag";
import {Duration} from "./interfaces/duration";
import {
  CategoryOrderArray,
  CategoryType,
  SelectedOption,
  SelectedOptions,
  SelectedOptionsForCategory
} from "./interfaces/selected-options-for-category";

@Injectable({
  providedIn: 'root'
})


export class SelectionService {
  selectedElements$ = new BehaviorSubject<string[]>([]);

  selectedElements: Set<string> = new Set<string>()

  filterOptions: Options[] = Array.from(filterOptionsMap).map(([key, value]) => {
    const element: Options = {
      title: key,
      data: Object.values(value).map(e => ({name: e}))
    };
    return element;
  });

  private _test2: SelectedOptions = {
    ['Tag' as CategoryType]: [],
    ['Duration' as CategoryType]: [],
  }


  update() {
    console.log(Tag.toString())
  }

  updateSelectedElements(elements: string[]) {
    elements.forEach(e => {

      if (this.selectedElements.has(e)) {

        this.selectedElements.delete(e)
      } else {
        this.selectedElements.add(e)
      }
    })
  }

  updateSelectedElement(selectedOption: SelectedOption) {
    this._test2[selectedOption.category] = [...selectedOption.elements] // ts działa na referncji,
    // chcemy skopiować dane z tego co przyszło a nie usawiać wskaźnik na tą tablice
    this._buildSetOfSelectedElements();
  }

  private _buildSetOfSelectedElements() {
    debugger
    this.selectedElements = new Set<string>();
    CategoryOrderArray.forEach(
      category => {
          this._test2[category].forEach(el => this.selectedElements.add(el))
      })
  }
}
