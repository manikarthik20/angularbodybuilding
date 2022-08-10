import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingAccessoriesComponent } from './clothing-accessories.component';

describe('ClothingAccessoriesComponent', () => {
  let component: ClothingAccessoriesComponent;
  let fixture: ComponentFixture<ClothingAccessoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClothingAccessoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
