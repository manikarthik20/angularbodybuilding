import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeanBodyComponent } from './lean-body.component';

describe('LeanBodyComponent', () => {
  let component: LeanBodyComponent;
  let fixture: ComponentFixture<LeanBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeanBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeanBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
