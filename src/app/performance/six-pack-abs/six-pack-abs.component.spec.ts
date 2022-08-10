import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixPackAbsComponent } from './six-pack-abs.component';

describe('SixPackAbsComponent', () => {
  let component: SixPackAbsComponent;
  let fixture: ComponentFixture<SixPackAbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixPackAbsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixPackAbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
