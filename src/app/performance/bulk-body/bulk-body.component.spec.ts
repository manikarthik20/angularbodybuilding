import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkBodyComponent } from './bulk-body.component';

describe('BulkBodyComponent', () => {
  let component: BulkBodyComponent;
  let fixture: ComponentFixture<BulkBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
