import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuranService } from 'src/app/shared/services/quran.service';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-translation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss'],
  providers: [NgbModal],
})

export class TranslationComponent {

  constructor(
    private _QuranService: QuranService,
    private _ActivatedRoute: ActivatedRoute,
		private modalService: NgbModal,
    ){}

  @ViewChild('audio') audioPlayerRef!: ElementRef;

  suraId: any = 0;
  toggle: boolean = true;
  apiResponse: any = [];
  apiRes: any = [];
  taffsirRes:any;

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
          this.apiRes = this.apiResponse;
        }
      },
    });
  }

  audioPlay(source: string): any {
    // start the new audio
    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    audioPlayer.src = `https://verses.quran.com/` + source;
    audioPlayer.play();
  }

  copy(ayahText:number):void{
    let ayahToCopy:string ='';

    for (let word = 0; word < this.apiRes[ayahText -1].words.length ; word++) {
        ayahToCopy += this.apiRes[ayahText -1].words[word].text_uthmani ;
        ayahToCopy +=" ";
    }

    navigator.clipboard.writeText(ayahToCopy);
  }

  getTafssir(versekey:string):void{
    this._QuranService.getTaffsirByAyah(versekey).subscribe({
      next:(res)=>{
        this.taffsirRes=res.tafsir
      }
    })
  }

  open(content:any) {
		this.modalService.open(content);
	}
}
