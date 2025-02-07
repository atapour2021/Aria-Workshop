import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { dictionary } from '@dictionary/dictionary';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  dictionary = dictionary;
  navItems = [
    {
      name: dictionary.Home,
      route: '/home',
    },
    {
      name: dictionary.About,
      route: '/about',
    },
    {
      name: dictionary.Products,
      route: '/products',
    },
  ];
}
