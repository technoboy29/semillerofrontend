import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhaseperComponent } from './phaseper.component';

describe('PhaseperComponent', () => {
  let component: PhaseperComponent;
  let fixture: ComponentFixture<PhaseperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhaseperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhaseperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
