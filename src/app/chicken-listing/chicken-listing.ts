import { Component, inject, signal } from '@angular/core';
import { Chicken } from '../types/chicken.js';
import { CHICKENS } from '../mock-data/mock-chickens.js';
import { ChickenOverview } from '../chicken-overview/chicken-overview.js';
import { ChickenService } from '../chickens.services.js';
import { RouterModule } from '@angular/router';
// import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-chicken-listing',
  imports: [ChickenOverview, RouterModule],
  templateUrl: './chicken-listing.html',
  styleUrl: './chicken-listing.css',
})
export class ChickenListing {
  chickenservice: ChickenService = inject(ChickenService);
  // chickens: Chicken[] = [];
  chickens = signal<Chicken[]>([])

  constructor() {
    this.chickenservice.getChickens()
    .then((chickensData) => {
      this.chickens.set(chickensData);
    });
  }
}
