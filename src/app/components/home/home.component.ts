import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSuraComponent } from '../home-sura/home-sura.component';
import { HomeJuzComponent } from '../home-juz/home-juz.component';
import { MainSliderComponent } from '../main-slider/main-slider.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
  CommonModule,
    HomeSuraComponent,
    MainSliderComponent,
    HomeJuzComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {}
