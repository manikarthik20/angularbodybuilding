import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VitaminsHealthComponent } from './vitamins-health.component';

describe('VitaminsHealthComponent', () => {
  let component: VitaminsHealthComponent;
  let fixture: ComponentFixture<VitaminsHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VitaminsHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VitaminsHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
