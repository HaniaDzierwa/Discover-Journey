import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardJourneyComponent } from './card-journey.component';

describe('CardJourneyComponent', () => {
  let component: CardJourneyComponent;
  let fixture: ComponentFixture<CardJourneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardJourneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardJourneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
