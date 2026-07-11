import { inject, Service } from '@angular/core';
import { CHICKENS } from './mock-data/mock-chickens.js';
import { Chicken } from './types/chicken.js';
import { HttpClient } from '@angular/common/http';


@Service()
export class ChickenService {
    private http = inject(HttpClient)
    baseurl = '/api/v1/chickens';
    chickens: Chicken[] = CHICKENS;
    emptyChicken: Chicken = {
        id: '',
        name: '',
        breed: '',
        weight: 0,
        color: '',
        imageUrl: ''
    };

    async getChickens(): Promise<Chicken[]> {
        const data = await fetch(`${this.baseurl}`)
        return await data.json()
    }

    getChickenById(id: string): Chicken {
        return this.chickens.find(chicken => chicken.id === id) || this.emptyChicken;
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

    async createChicken(newChicken: Chicken): Promise<void> {
        // New Promise to prevent race condition
        return new Promise((resolve, reject) => {
            this.http.post(this.baseurl, newChicken, {
                keepalive: true,
            })
                .subscribe((data) => {
                    console.log(data);
                    resolve()
                });
        });
    }
}
