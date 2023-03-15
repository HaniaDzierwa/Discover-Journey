export type CategoryType =
  | 'Tag'
  | 'Duration';

export const CategoryOrderArray = [
  'Tag' as CategoryType,
  'Duration' as CategoryType
]

export interface SelectedOptions {
  [category: string]: string[]
}

export interface SelectedOption {
  category: string,
  elements: string[]
}


export interface SelectedElementsWithCategory {
  category: string,
  elements: Set<string>
}
