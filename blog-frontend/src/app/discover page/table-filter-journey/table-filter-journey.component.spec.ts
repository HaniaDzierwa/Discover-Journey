import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFilterJourneyComponent } from './table-filter-journey.component';

describe('TableFilterJourneyComponent', () => {
  let component: TableFilterJourneyComponent;
  let fixture: ComponentFixture<TableFilterJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableFilterJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableFilterJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
