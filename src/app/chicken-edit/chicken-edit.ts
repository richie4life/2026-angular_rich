import { Component, inject, signal } from '@angular/core';
import { Chicken } from '../types/chicken';
import { ChickenService } from '../chickens.services';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-chicken-edit',
  imports: [ReactiveFormsModule],
  templateUrl: './chicken-edit.html',
  styleUrl: './chicken-edit.css',
})
export class ChickenEdit {
chickenService: ChickenService = inject(ChickenService);
router: Router = inject(Router);
route: ActivatedRoute = inject(ActivatedRoute);
// TODO: Replace with emptyChicken constant
  currentChicken = signal<Chicken>({
    id: '',
    name: '',
    breed: '',
    weight: 0,
    color: '',
  });
chickenId: string;
//
// Marked as optional/nullable to make typescript happy
// ... acceptable in certain situations but generally bad practice
chickenForm!: FormGroup

  constructor() {
    this.chickenId = this.route.snapshot.params['id'];
    // TODO: FIX THIS!! Use signal
    this.chickenService.getChickenById(this.chickenId)
      .then((chickensData) => {
        this.currentChicken.set(chickensData);
          this.chickenForm = new FormGroup({
      name: new FormControl(this.currentChicken.name),
      breed: new FormControl(this.currentChicken().breed),
      color: new FormControl(this.currentChicken().color),
      weight: new FormControl(this.currentChicken().weight),
      });
    })
  }

  saveChicken(): void {
    const updateChicken: Chicken = {
      id: this.currentChicken().id,
      imageUrl: this.currentChicken().imageUrl,
      ...this.chickenForm?.value
    };
    this.chickenService.updateChicken(this.chickenId, updateChicken);
    
    //Redirect to main page / chicken listing
    this.router.navigate([''])
  }
}
