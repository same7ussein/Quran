import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuranService } from 'src/app/shared/services/quran.service';

@Component({
  selector: 'app-translation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})
export class TranslationComponent {
  constructor(private _QuranService:QuranService , private _ActivatedRoute:ActivatedRoute){}

  @ViewChild('audio') audioPlayerRef!: ElementRef;

  suraId:any=0
  toggle:boolean = true
  apiResponse:any =[];

  ngOnInit(): void {
    this.getSuraId()
  }

// extract the id from the path
  getSuraId():void{
    this._ActivatedRoute.paramMap.subscribe({
      next:(res)=>{
        this.suraId=res.get('id');
        this.getSuraWords();
      }
    })
  }

  // push word by word in array and the same for word audio url
  getSuraWords(pagesNumber:number = 1):void{
    this._QuranService.getWordByWord(this.suraId,pagesNumber).subscribe({
      next:(response)=>{
        // save the response
        for(var i = 0 ; i < response.verses.length ; i++){
          var ayahresponse:any =[]
          for(var x = 0 ; x <response.verses[i].words.length; x++){
              ayahresponse.push(response.verses[i])
          }
          this.apiResponse.push(ayahresponse)
        }
        // check number of pages
        const numOfPages= response.pagination.total_pages
        const currentPage= response.pagination.current_page
        // check if there is more pages and if yes call the next page 
        if(currentPage < numOfPages){
          this.getSuraWords(currentPage +1 )
        }
      }
    })
  }

  audioPlay(source:string, i:number):any{ 
    // start the new audio
    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    audioPlayer.src = `https://verses.quran.com/`+ source;
    audioPlayer.play();   
    }

}
