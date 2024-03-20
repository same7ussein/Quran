import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuranService } from 'src/app/shared/services/quran.service';
import { RouterLink } from '@angular/router';
import { Juzs } from 'src/app/shared/interfaces/juzs';

@Component({
  selector: 'app-home-juz',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './home-juz.component.html',
  styleUrls: ['./home-juz.component.scss']
})
export class HomeJuzComponent implements OnInit {
  constructor(private _QuranService: QuranService) {}

  ngOnInit(): void {
    this.getJuzs();
  }
  juzsName: Juzs[] = [];
  id: any = [];
  getJuzs(): void {
    this._QuranService.juzName().subscribe({
      next: (response) => {
        console.log(response.juzs);
        this.juzsName = response.juzs;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

}
