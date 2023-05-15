import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PvJourneyDemoComponent } from './pv-journey-demo.component';

describe('PvJourneyDemoComponent', () => {
  let component: PvJourneyDemoComponent;
  let fixture: ComponentFixture<PvJourneyDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PvJourneyDemoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PvJourneyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
