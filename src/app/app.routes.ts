import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path: 'Product',
        component: ProductsComponent,
    },
    {
        path: 'Product/:id',
        component: ProductsComponent,
    },
];
