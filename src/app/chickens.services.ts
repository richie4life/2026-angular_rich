import { Service } from '@angular/core';
import { CHICKENS } from './mock-data/mock-chickens.js';
import { Chicken } from './types/chicken.js';

@Service()
export class ChickenService {
    chickens: Chicken[] = CHICKENS;
    emptyChicken: Chicken = {
        id: '',
        name: '',
        breed: '',
        weight: 0,
        color: '',
        imageUrl: ''
    };
    getChickenById(id: string): Chicken {
        return this.chickens.find(chicken => chicken.id === id) || this.emptyChicken;
    }

    getChickens(): Chicken[] {
        return this.chickens;
    }

    deleteChicken(id: string): void {
        const previousLength = this.chickens.length;
        this.chickens = this.chickens.filter(chicken => chicken.id !== id);
        if (this.chickens.length === previousLength) {
            console.log('Failed to delete chicken with id:', id);
        } else {
            console.log('Deleted chicken with id:', id);
        }
    }

    updateChicken(id: string, updatedChicken: Chicken) {
        const idx = this.chickens.findIndex(c => c.id === id);

        if (idx >= 0) {
            this.chickens[idx] = updatedChicken;
        }
    }

    createChicken(newChicken: Chicken): void {
        this.chickens.push(newChicken);
    }
}
