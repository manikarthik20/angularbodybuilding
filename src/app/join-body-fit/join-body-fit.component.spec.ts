import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinBodyFitComponent } from './join-body-fit.component';

describe('JoinBodyFitComponent', () => {
  let component: JoinBodyFitComponent;
  let fixture: ComponentFixture<JoinBodyFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinBodyFitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinBodyFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
