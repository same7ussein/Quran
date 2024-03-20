import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  MainSlider: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    navSpeed: 500,
    autoplay: true,
    navText: ['', ''],
    items: 1,
    nav: false,
  };
}
