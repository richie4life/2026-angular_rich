import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenDetails } from './chicken-details';

describe('ChickenDetails', () => {
  let component: ChickenDetails;
  let fixture: ComponentFixture<ChickenDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChickenDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(ChickenDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
