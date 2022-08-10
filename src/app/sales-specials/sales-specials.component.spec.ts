import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSpecialsComponent } from './sales-specials.component';

describe('SalesSpecialsComponent', () => {
  let component: SalesSpecialsComponent;
  let fixture: ComponentFixture<SalesSpecialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesSpecialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
