import { Service } from '@angular/core';
import { CHICKENS } from './mock-data/mock-chickens.js';
import { Chicken } from './types/chicken.js';

@Service()
export class ChickenService {
    emptyChicken: Chicken = {
        id: '',
        name: '',
        breed: '',
        weight: 0,
        color: '',
        imageUrl: ''
    };
    getChickenById(id: string): Chicken {
        return CHICKENS.find(chicken => chicken.id === id) || this.emptyChicken;
    }

    getChickens(): Chicken[] {
        return CHICKENS;
    }
}
