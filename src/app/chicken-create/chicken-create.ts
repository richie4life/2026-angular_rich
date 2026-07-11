import { Component, inject } from '@angular/core';
import { Chicken } from '../types/chicken';
import { ChickenService } from '../chickens.services';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chicken-create',
  imports: [ReactiveFormsModule],
  templateUrl: './chicken-create.html',
  styleUrl: './chicken-create.css',
})
export class ChickenCreate {
  chickenService: ChickenService = inject(ChickenService);
  router: Router = inject(Router)
  newChickenForm: FormGroup;

  constructor() {
    this.newChickenForm = new FormGroup({
      name: new FormControl(''),
      breed: new FormControl(''),
      color: new FormControl(''),
      weight: new FormControl(0),
      imageUrl: new FormControl(''),

    })
  }

  async createChicken(): Promise<void> {
    const newChicken: Chicken = {
      ...this.newChickenForm.value
    };
    await this.chickenService.createChicken(newChicken);

    //Redirect to main page / chicken listing
    this.router.navigate([''])
  }
}
