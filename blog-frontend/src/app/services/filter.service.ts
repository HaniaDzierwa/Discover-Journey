import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filterOpened$ = new Subject<boolean>();

  openFilter() {
    return this.filterOpened$.next(true);
  }

  isSearched$ = new Subject<boolean>()

  updateSelectedCards() {
    return this.isSearched$.next(true);
  }

  getUpdate(): Observable<boolean> {
    return this.isSearched$.asObservable()
  }
}
