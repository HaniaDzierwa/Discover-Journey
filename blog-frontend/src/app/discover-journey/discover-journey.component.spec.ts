import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverJourneyComponent } from './discover-journey.component';

describe('DiscoverJourneyComponent', () => {
  let component: DiscoverJourneyComponent;
  let fixture: ComponentFixture<DiscoverJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscoverJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
