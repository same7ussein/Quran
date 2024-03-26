import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecitersComponent } from '../reciters/reciters.component';
import { HomeComponent } from '../home/home.component';
import { HomeJuzComponent } from '../home-juz/home-juz.component';
import { RouterLink } from '@angular/router';
import { QuranAudioComponent } from '../quran-audio/quran-audio.component';

@Component({
  selector: 'app-nav-blank',
  standalone: true,
  imports: [CommonModule,
    RecitersComponent,
    HomeComponent,
    HomeJuzComponent,
    RouterLink
    
  ],
  templateUrl: './nav-blank.component.html',
  styleUrls: ['./nav-blank.component.scss']
})
export class NavBlankComponent {

}
