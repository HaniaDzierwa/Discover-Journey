import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterOpened$ = new Subject<boolean>();
  openFilter() {
    return this.filterOpened$.next(true);
  }
}
