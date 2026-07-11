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

    async getChickenById(id: string): Promise<Chicken>  {
        const data = await fetch(`${this.baseurl}/${id}`)
        return await data.json();
    }

    async deleteChicken(id: string): Promise<void> {
        // New Promise to prevent race condition
        return new Promise((resolve) => {
            this.http.delete(`${this.baseurl}/${id}`)
                .subscribe(() => {
                    resolve()
                });
        });
    }

    updateChicken(id: string, updatedChicken: Chicken): void {
        const idx = this.chickens.findIndex(c => c.id === id);

        if (idx >= 0) {
            this.chickens[idx] = updatedChicken;
        }
    }

    async createChicken(newChicken: Chicken): Promise<void> {
        // New Promise to prevent race condition
        return new Promise((resolve) => {
            this.http.post(this.baseurl, newChicken, {
                keepalive: true,
            })
                .subscribe(() => {
                    resolve()
                });
        });
    }
}
