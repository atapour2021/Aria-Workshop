import { Component } from '@angular/core';
import { SliderComponent } from '@app/components';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
