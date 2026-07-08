import { Routes } from '@angular/router';
import { ChickenListing } from './chicken-listing/chicken-listing';
import { ChickenDetails } from './chicken-details/chicken-details';

export const routes: Routes = [
    {
        path: '',
        component: ChickenListing,
        title: 'Chicken Listing',
    },
    {
        path: 'chickens/:id',
        component: ChickenDetails,
        title: 'Chicken Details',
    }
];
