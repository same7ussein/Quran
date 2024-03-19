import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSuraComponent } from '../home-sura/home-sura.component';
import { MainSliderComponent } from '../main-slider/main-slider.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HomeSuraComponent,
    MainSliderComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
