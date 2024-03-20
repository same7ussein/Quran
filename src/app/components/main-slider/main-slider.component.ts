import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from '../slider/slider.component';

@Component({
  selector: 'app-main-slider',
  standalone: true,
  imports: [CommonModule,SliderComponent],
  templateUrl: './main-slider.component.html',
  styleUrls: ['./main-slider.component.scss'],
})
export class MainSliderComponent {}
