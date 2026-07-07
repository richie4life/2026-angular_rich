import { Component, signal } from '@angular/core';
import { CHICKEN } from '../mock-data/mock-chicken.js';

@Component({
  selector: 'app-chicken-details', //<app-chicken-details>
  imports: [],
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
  protected readonly welcomeMessage = signal('Welcome to chicken-details component');

  protected readonly currentChicken = CHICKEN

};
