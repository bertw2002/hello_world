import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcmainComponent } from './calcmain.component';

describe('CalcmainComponent', () => {
  let component: CalcmainComponent;
  let fixture: ComponentFixture<CalcmainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcmainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
