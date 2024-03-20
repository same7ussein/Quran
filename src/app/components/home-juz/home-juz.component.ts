import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuranService } from 'src/app/shared/services/quran.service';
import { RouterLink } from '@angular/router';
import { Juzs } from 'src/app/shared/interfaces/juzs';
import { suraName } from 'src/app/shared/interfaces/sura-name';

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
    this.getNames();

  }

  juzsName: Juzs[] = [];
  suraName: suraName[] = [];
  JuzSuras:[number[]] = [[0]];


  getJuzs(): void {
    this._QuranService.juzName().subscribe({
      next: (response) => {
        console.log(response.juzs);
        this.juzsName = response.juzs;
        this.getJuzSuras();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getNames(): void {
    this._QuranService.suraName().subscribe({
      next: (res) => {
        console.log();
        this.suraName = res.chapters;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getJuzSuras():void{
    for(var i = 0 ; i < 30 ; i++){
    var stringArray:string[] = Object.keys(this.juzsName[i].verse_mapping)
    this.JuzSuras.push(stringArray.map(str => parseInt(str, 10)))
    }
    console.log(this.JuzSuras)
  }

  getNumber(SuraNumber:number){
      var num;
      if (SuraNumber >= 1 && SuraNumber < 10) {
         num= '00' +`${SuraNumber}`;
      }
      else if(SuraNumber >= 10 && SuraNumber < 100){
        num= '0' +`${SuraNumber}`;
      }
      else{
        num= `${SuraNumber}`;
      }
      return num;
  }

}
