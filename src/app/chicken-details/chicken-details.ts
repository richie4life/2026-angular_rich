import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Chicken } from '../types/chicken.js';
import { ChickenService } from '../chickens.services.js';

@Component({
  selector: 'app-chicken-details', //<app-chicken-details>
  imports: [RouterModule],
  templateUrl: './chicken-details.html',
  styleUrl: './chicken-details.css',
})
export class ChickenDetails {
  // counter = 1;
  // tempVar = signal(1);

  // constructor() {
  //   setInterval(() => {
  //     this.tempVar.set(this.counter++);
  //     console.log(`Set tempVar ${this.tempVar}`);
  //   }, 5000)
  // }
  router: Router= inject(Router);
  route: ActivatedRoute= inject(ActivatedRoute);
  chickenService: ChickenService= inject(ChickenService);
  chickenId: string;
  protected currentChicken: Chicken;

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    this.currentChicken = this.chickenService.getChickenById(this.chickenId);
  }

  deleteChicken() {
    this.chickenService.deleteChicken(this.chickenId);
    this,this.router.navigate([''])
  }

};
