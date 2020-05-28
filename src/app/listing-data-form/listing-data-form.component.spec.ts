import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingDataFormComponent } from './listing-data-form.component';

describe('ListingDataFormComponent', () => {
  let component: ListingDataFormComponent;
  let fixture: ComponentFixture<ListingDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
