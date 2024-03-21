import { ElementRef, ViewChild } from '@angular/core';
import { QuranService } from 'src/app/shared/services/quran.service';
import { ActivatedRoute } from '@angular/router';
import { SuraAudio } from './../../shared/interfaces/sura-audio';
import { Sura } from './../../shared/interfaces/sura';
import { Reciter } from './../../shared/interfaces/reciter';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reading-sura',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reading-sura.component.html',
  styleUrls: ['./reading-sura.component.scss'],
})
export class ReadingSuraComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer: any;

  constructor(
    private _QuranService: QuranService,
    private _ActivatedRoute: ActivatedRoute
  ) {}
  suraId: any = 0;
  suraopj: Sura[] = [];
  suraAudio: SuraAudio = {} as SuraAudio;
  reciterId: number = 7;
  reciters: Reciter[] = [];

  specificTime: number = 0;

  ngOnInit(): void {
    this.getSuraId();
    this.getSpecialSura();
    this.getSpecialaudio();
    this.getReciter();
  }

  getSuraId(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.suraId = res.get('id');
      },
    });
  }

  getSpecialSura(): void {
    this._QuranService.SpecialQuran(this.suraId).subscribe({
      next: (res) => {
        console.log(res.verses);
        this.suraopj = res.verses;
      },
    });
  }
  getSpecialaudio(): void {
    this._QuranService.QuranSpecialAudio(this.suraId).subscribe({
      next: (res) => {
        this.suraAudio = res.audio_file;
      },
    });
  }
  getReciter(): void {
    this._QuranService.recitations().subscribe({
      next: (res) => {
        console.log(res);
        this.reciters = res.recitations;
      },
    });
  }
  reciterchange(): void {
    this._QuranService
      .QuranSpecialAudio(this.suraId, this.reciterId)
      .subscribe({
        next: (res) => {
          this.suraAudio = res.audio_file;
        },
      });
  }
  printVerseKey(verseKey: string): void {
    const audioElement = this.audioPlayer.nativeElement;
    audioElement.pause();
    this.audioFromSpecificAyah(this.reciterId, this.suraId, verseKey);
  }

  playChapterAudio(): void {
    const audioElement = this.audioPlayer.nativeElement;
    audioElement.src = this.suraAudio.audio_url;
  }

  audioFromSpecificAyah(
    id: number,
    chapter_num: number,
    verseKey: string
  ): void {
    this._QuranService.audioFromSpecificAyah(id, chapter_num).subscribe({
      next: (res) => {
        const verseIndex = res.audio_files.findIndex(
          (audio: any) => audio.verse_key === verseKey
        );
        const higherUrls = res.audio_files
          .slice(verseIndex)
          .map((audio: any) => `https://verses.quran.com/${audio.url}`);
        console.log(higherUrls);
        if (higherUrls.length > 0) {
          const audioElement = this.audioPlayer.nativeElement;
          let currentIndex = 0;
          audioElement.src = higherUrls[currentIndex];
          audioElement.play();
          audioElement.addEventListener('ended', () => {
            currentIndex++;
            if (currentIndex < higherUrls.length) {
              audioElement.src = higherUrls[currentIndex];
              this.specificTime += Math.floor(audioElement.duration);
              audioElement.play();
            } else {
              this.playChapterAudio();
            }
          });
        }
      },
      error: (err: HttpErrorResponse) => {
        console.log(err);
      },
    });
  }
}
