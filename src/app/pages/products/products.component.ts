import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  products = [
    {
      name: 'Product 1',
      description: 'Description of product 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 2',
      description: 'Description of product 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Product 3',
      description: 'Description of product 3',
      image: 'https://via.placeholder.com/150',
    },
  ];
}
