import {Injectable} from '@angular/core';
import {Tag} from "../interfaces/tag";
import {Duration} from "../interfaces/duration";
import {
  CategoryOrderArray,
  CategoryType,
  SelectedOption,
  SelectedOptions
} from "../interfaces/selected-options-for-category";

@Injectable({
  providedIn: 'root'
})

export class SelectionService {

  private _selectedOptions: SelectedOptions = {
    ['Tag' as CategoryType]: [],
    ['Duration' as CategoryType]: [],
  }
  selectedElementsWithCategory: SelectedOption [] = []

  constructor() {
    CategoryOrderArray.forEach(category => {
      this.selectedElementsWithCategory.push({category: category, elements: []})
    })
  }

  clean() {
    this.selectedElementsWithCategory = []
    CategoryOrderArray.forEach(category => {
      this.selectedElementsWithCategory.push({category: category, elements: []})
    })
  }

  updateSelectedElements(selectedOption: SelectedOption) {
    this._selectedOptions[selectedOption.category] = [...selectedOption.elements] // ts działa na referncji,
    // chcemy skopiować dane z tego co przyszło a nie usawiać wskaźnik na tą tablice

    this.selectedElementsWithCategory.forEach(value => {
      if (value.category == selectedOption.category) {
        value.elements = [...selectedOption.elements]
      }
    })
  }
}
