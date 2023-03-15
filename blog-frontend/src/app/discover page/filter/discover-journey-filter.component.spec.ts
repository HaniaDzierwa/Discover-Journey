import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJourneyFilterComponent } from './discover-journey-filter.component';

describe('FilterComponent', () => {
  let component: DiscoverJourneyFilterComponent;
  let fixture: ComponentFixture<DiscoverJourneyFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverJourneyFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverJourneyFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
