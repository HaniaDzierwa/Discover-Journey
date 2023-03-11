import {Tag} from "./tag";
import {Duration} from "./duration";

export interface FilterOptionInterface {
  title: string
  expended: boolean,
  data: any[]
}



export const Category = {
  TAG: 'Tag' as Tag,
  Duration: 'Duration' as Duration
};

export const filterOptionsMap = new Map<string, any>([
  ["Tag",Tag],
  ["Duration", Duration],
]);


export interface Options {
  title: string,
  data: any[]
}
