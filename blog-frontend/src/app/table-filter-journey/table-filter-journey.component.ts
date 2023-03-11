import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FilterInterface} from "../interfaces/tag";
import {MatTableDataSource} from "@angular/material/table";
import {SelectionModel} from "@angular/cdk/collections";
import {SelectionService} from "../selection.service";
import {SelectedOptionsForCategory} from "../interfaces/selected-options-for-category";
import {combineLatestAll} from "rxjs";
import {filterOptionsMap} from "../interfaces/FilterOption";

@Component({
  selector: 'app-table-filter-journey',
  templateUrl: './table-filter-journey.component.html',
  styleUrls: ['./table-filter-journey.component.scss']
})


export class TableFilterJourneyComponent implements OnInit {

  limitRows: number = 3;
  @Input() filterElements: FilterInterface[] = []
  @Input() isExpand: boolean = false;
  @Input() title: string = ''
  displayedColumns: string[] = ['select', 'name']
  dataSource = new MatTableDataSource<FilterInterface>();
  selection = new SelectionModel<any>(true, []);
  selectedRows: [] = []
  isShowAll: boolean = false;
  showAll: string = "Show more"
  showLess: string = "Show less"
  messageShowAllorLess: string = this.showAll;

  allOptions: Set<string> = new Set<string>()

  @Output() selectedOptions = new EventEmitter<SelectedOptionsForCategory>();

  constructor(private _selectionService: SelectionService) {
  }


  ngOnInit() {
    this.dataSource = new MatTableDataSource<FilterInterface>(this['filterElements']);
    this.dataSource = new MatTableDataSource<FilterInterface>(this.dataSource.data.slice(0, this.limitRows))
    // Object.values(filterOptionsMap.get(this.title).forEach( v => {
    //   v.name
    // })
    // console.log('all' + this.allOptions)
  }

  update(row: any) {
    //console.log('row ' + row.name)// zwraca ten co sie zmienil
    this.selectedRows = []
    //console.log(this.selection.selected)
    // this.selection.selected.map(v => v.name).forEach(value => {
    //   this.selectedRows.includes(value)
    // })

    const selectedRowsSorted: string[] = this.dataSource.data
      .map(item => { console.log(this.selection.isSelected(item.name))
        return this.selection.isSelected(item) ? item : null})
      .filter(item => item !== null)
      .map(v => v?.name)
      .map(name => name as string)


    // selectedRowsSorted.forEach(value => {
    //   this.selectedRows.add(value)
    // })
    //this.selectedOptions.emit( {title: this.title, selectedOptions: this.selectedRows});
    //this._selectionService.updateSelectedElements(this.selectedRows);
    //console.log(this.selectedRows) //tutaj pokazuje dobre wartosci ktore zostaly zmienione

    this._selectionService.updateSelectedElement({category: this.title, elements: selectedRowsSorted})
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    this.dataSource = new MatTableDataSource<FilterInterface>(this['filterElements']);
    if (this.isAllSelected()) {
      this.selection.clear();
    } else {
      this.selection.select(...this.dataSource.data);
    }
    //this.update()
    this.dataSource = new MatTableDataSource<FilterInterface>(this.dataSource.data.slice(0, this.limitRows))
    this.messageShowAllorLess = this.showAll;
    this.isShowAll = false;
  }

  checkboxLabel(row?: string): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }

    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row}`;
  }

  doFilter(event: Event) {
    const filterValue: string = (event.target as HTMLInputElement).value;

    this.dataSource = new MatTableDataSource<FilterInterface>(this.filterElements);
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if ((this.dataSource.data.length < this.limitRows) || filterValue === '') {
      this.dataSource = new MatTableDataSource<FilterInterface>(this.dataSource.data.slice(0, this.limitRows))
      this.messageShowAllorLess = this.showAll;
      this.isShowAll = false;
    }
  }

  showRecords() {
    this.isShowAll = !this.isShowAll;
    if (this.isShowAll) {
      this.dataSource = new MatTableDataSource<FilterInterface>(this['filterElements']);
      this.messageShowAllorLess = this.showLess;
    } else {
      this.dataSource = new MatTableDataSource<FilterInterface>(this.dataSource.data.slice(0, this.limitRows))
      this.messageShowAllorLess = this.showAll;
    }
  }

  public getSelectedOptions() {
    return this.selectedRows
  }
}
