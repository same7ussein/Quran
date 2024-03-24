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
  suraWords:[string[]] =[[]]
  wordsAudio:[string[]]=[[]]
  numOfPages!:number
  toggle:boolean = true
  pageNum:[number[]] =[[]]


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
      
        
        // check number of pages
        this.numOfPages= response.pagination.total_pages
        // check if there is more pages and if yes call the next page 
        if(response.pagination.current_page < response.pagination.total_pages){
          this.getNextPage(response.pagination.current_page +1 )
        }
        // save the audio sources and the words to display on html 
        for(var i = 0 ; i < response.verses.length ; i++){
          var ayahWord:string[] =[];
          var ayahAudio:string[] =[];
          var ayahPageNum:number[] =[];
          for(var x = 0 ; x <response.verses[i].words.length; x++){
            if(x == response.verses[i].words.length-1){
              ayahWord.push(response.verses[i].words[x].code_v1);
              ayahAudio.push('');
              ayahPageNum.push(response.verses[i].words[x].page_number) 
            }else{
              ayahWord.push(response.verses[i].words[x].code_v1);
              ayahAudio.push("https://verses.quran.com/"+response.verses[i].words[x].audio_url);
              ayahPageNum.push(response.verses[i].words[x].page_number) 
            }
          }
          this.suraWords.push(ayahWord)
          this.wordsAudio.push(ayahAudio)
          this.pageNum.push(ayahPageNum)
        }
      }
    })
  }

  audioPlay(source:string, i:number):any{ 

    // start the new audio
    const audioPlayer = this.audioPlayerRef.nativeElement as HTMLAudioElement;
    audioPlayer.src = source;
    audioPlayer.currentTime = 0;   
    audioPlayer.play();   
    }

    getNextPage(nextPageNum:number):void{
      this.getSuraWords(nextPageNum);
    }
}
