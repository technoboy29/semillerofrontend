import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseentComponent } from './phaseent.component';

describe('PhaseentComponent', () => {
  let component: PhaseentComponent;
  let fixture: ComponentFixture<PhaseentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
