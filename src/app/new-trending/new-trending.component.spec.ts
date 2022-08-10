import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTrendingComponent } from './new-trending.component';

describe('NewTrendingComponent', () => {
  let component: NewTrendingComponent;
  let fixture: ComponentFixture<NewTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
