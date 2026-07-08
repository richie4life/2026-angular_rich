import { Component, inject } from '@angular/core';
import { Chicken } from '../types/chicken.js';
import { CHICKENS } from '../mock-data/mock-chickens.js';
import { ChickenOverview } from '../chicken-overview/chicken-overview.js';
import { ChickenService } from '../chickens.services.js';

@Component({
  selector: 'app-chicken-listing',
  imports: [ChickenOverview],
  templateUrl: './chicken-listing.html',
  styleUrl: './chicken-listing.css',
})
export class ChickenListing {
  chickenservice: ChickenService = inject(ChickenService);
  chickens: Chicken[];

  constructor() {
    this.chickens = this.chickenservice.getChickens();
  }
}
