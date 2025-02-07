import { Routes } from '@angular/router';
import { AboutComponent, HomeComponent, ProductsComponent } from '@app/pages';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];
