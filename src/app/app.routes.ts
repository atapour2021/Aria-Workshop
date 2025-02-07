import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('@app/pages').then((m) => m.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () => import('@app/pages').then((m) => m.AboutComponent),
  },
  {
    path: 'products',
    loadComponent: () => import('@app/pages').then((m) => m.ProductsComponent),
  },
];
