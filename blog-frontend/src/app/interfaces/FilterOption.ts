import {Tag} from "./tag";
import {Duration} from "./duration";

export interface FilterOptionInterface {
  title: string
  expended: boolean,
  data: any[]
}

export const filterOptionsMap = new Map<string, any>([
  ["Tag",Tag],
  ["Duration", Duration],
]);

export interface  SelectedOptions {
  category: string
  data : Set<string>
}
