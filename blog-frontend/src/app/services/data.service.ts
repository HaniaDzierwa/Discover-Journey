import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {JourneyModel} from "../interfaces/JourneyModel";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Headers': 'Content-Type'})
  };

  baseUrl: string = 'http://localhost:8080/api/v1/journey'

  constructor(private _http: HttpClient) {
  }

  getAllJourneys(): Observable<JourneyModel[]> {
    const url: string = this.baseUrl + '/journeys'
    return this._http.get<JourneyModel[]>(url, this.httpOptions);
  }

  getAllJourneysWithTags(selectedElements: string[]): Observable<JourneyModel[]> {

    let selectedElementsInString = selectedElements.toString()

    if (selectedElementsInString.endsWith(','))
      selectedElementsInString = selectedElementsInString.slice(0, -1);

    if (selectedElementsInString.length > 0) {
      selectedElementsInString = '/' + selectedElementsInString
    }

    let url: string = this.baseUrl + '/journeys' + selectedElementsInString;
    return this._http.get<JourneyModel[]>(url, this.httpOptions);

  }

}
