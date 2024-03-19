import { suraName } from './../../shared/interfaces/sura-name';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuranService } from 'src/app/shared/services/quran.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-sura',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-sura.component.html',
  styleUrls: ['./home-sura.component.scss'],
})
export class HomeSuraComponent {
  constructor(private _QuranService: QuranService) {}

  ngOnInit(): void {
    this.getNames();
  }
  suraName: suraName[] = [];
  id: any = [];
  getNames(): void {
    this._QuranService.suraName().subscribe({
      next: (res) => {
        console.log();
        this.suraName = res.chapters;
        for (let i = 0; i < this.suraName.length; i++) {
          if (this.suraName[i].id >= 1 && this.suraName[i].id < 10) {
            this.id.push('00' + this.suraName[i].id);
          }
          else if(this.suraName[i].id >= 10 && this.suraName[i].id < 100){
            this.id.push('0' + this.suraName[i].id);
          }
          else{
            this.id.push(this.suraName[i].id.toString());
          }
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
