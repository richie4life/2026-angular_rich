import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenListing } from './chicken-listing';

describe('ChickenListing', () => {
  let component: ChickenListing;
  let fixture: ComponentFixture<ChickenListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickenListing],
    }).compileComponents();

    fixture = TestBed.createComponent(ChickenListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
