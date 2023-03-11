
export type CategoryType =
  | 'Tag'
  | 'Duration';

export const CategoryOrderArray = [
  'Tag' as CategoryType,
  'Duration' as CategoryType
]
export interface SelectedOptionsForCategory {
  title : CategoryType
  selectedOptions : string[]
}

export interface SelectedOptions {
  [category: string]: string[]
}

export interface SelectedOption {
  category: string,
  elements: string[]
}
