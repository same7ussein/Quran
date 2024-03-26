import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuranService } from 'src/app/shared/services/quran.service';

@Component({
  selector: 'app-translation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
})
export class TranslationComponent {
  constructor(
    private _QuranService: QuranService,
    private _ActivatedRoute: ActivatedRoute
  ) {}

  @ViewChild('audio') audioPlayerRef!: ElementRef;

  suraId: any = 0;
  toggle: boolean = true;
  apiResponse: any = [];
  apiRes: any = [];

  ngOnInit(): void {
    this.getSuraId();
  }

  // extract the id from the path
  getSuraId(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next: (res) => {
        this.suraId = res.get('id');
        this.getSuraWords();
      },
    });
  }

  // push word by word in array and the same for word audio url
  getSuraWords(pagesNumber: number = 1): void {
    this._QuranService.getWordByWord(this.suraId, pagesNumber).subscribe({
      next: (response) => {
        response.verses.map((veres: any) => this.apiResponse.push(veres));

     

        // check number of pages
        const numOfPages = response.pagination.total_pages;
        const currentPage = response.pagination.current_page;
        // check if there is more pages and if yes call the next page
        if (currentPage < numOfPages) {
          this.getSuraWords(currentPage + 1);
        }
        if (currentPage >= numOfPages) {
          // setTimeout(()=>{console.log(this.apiResponse);},7000)
          this.apiRes = this.apiResponse;
          console.log(this.apiRes);
        }
        // console.log(currentPage,numOfPages);
      },
    });
  }

  audioPlay(source: string): any {
    // start the new audio
    console.log('DONE');

    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    audioPlayer.src = `https://verses.quran.com/` + source;
    audioPlayer.play();
  }
  copy(e:any) {
    var text = e.text;
    this.  copyToClipboard(e);
    console.log(e);
    
  }
  copyToClipboard(item:any) {
    const x:any = document.createElement('TEXTAREA');
    x.value = item;
    document.body.appendChild(x);
    x.select();
    document.execCommand('copy');
    document.body.removeChild(x);
  }
  

  
}
