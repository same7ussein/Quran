import { Observable } from 'rxjs';
import { SuraAudio } from './../../shared/interfaces/sura-audio';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { QuranService } from 'src/app/shared/services/quran.service';
import { RecitersService } from 'src/app/shared/services/reciters.service';
import { suraName } from 'src/app/shared/interfaces/sura-name';
import * as FileSaver from 'file-saver';



@Component({
  selector: 'app-quran-audio',
  standalone: true,
  imports: [CommonModule,
  
  
   
  ],
  templateUrl: './quran-audio.component.html',
  styleUrls: ['./quran-audio.component.scss']
})
export class QuranAudioComponent implements OnInit {
  constructor(private _route : ActivatedRoute ,private quran :QuranService){

  }
  // baseUrl:string='https://download.quranicaudio.com/qdc/abdul_baset/mujawwad/';
  suraAudios:SuraAudio={
    id: 0,
    chapter_id: 0,
    file_size: 0,
    format: '',
    audio_url: ''
  };
 suraDetails!:suraName[];
  id!:any;
  ngOnInit(): void {
    this._route.params.subscribe({
      next:(response)=>{
      this.id=response['id'];

      }
    });
    this.getSuraName();
  }


  getSuraName(){
    this.quran.suraName().subscribe(
     {
       next:(response)=>{
        this.suraDetails = response.chapters;
       }
     }
    )
  }
 
  oldIcon!:HTMLElement;
  i:number=0;
   flag:boolean=false;

  changeIcon(icon1:HTMLElement,suraId:number){
      if(this.i==0){
        this.oldIcon=icon1;

      }
     
     
      if(icon1.classList.contains('fa-play')){
        icon1.classList.replace('fa-play','fa-pause');
         this.flag=true;

       

        
        if(this.oldIcon!=icon1){
          this.oldIcon.classList.replace('fa-pause','fa-play');
           this.flag=true;
        }
        

      }else{

        icon1.classList.replace('fa-pause','fa-play');

        
         this.flag=false;
       
      }

     
      this.oldIcon=icon1;
      if(this.i==0){
        this.i++;
      }
   
  }
  getSpecificAudio(chapterId:number,reciterId:number){
    if(this.flag==true||this.downloadFlag==true){
      this.quran.QuranSpecialAudio(chapterId,reciterId).subscribe({
        next:(response)=>{
          
         this.suraAudios= response.audio_file;
         
         console.log(this.suraAudios.audio_url,"from specific audio");
         if(this.downloadFlag==true){
          FileSaver.saveAs(this.suraAudios.audio_url, this.suraAudios.format);
           this.downloadFlag=false;
         }
        
        },
        error:(err)=>{
          console.log(err);
        }
      })

    }
   
  }

  downloadFlag:boolean=false;
  downloadAudio(chapterId:number,reciterId:number){
    this.downloadFlag=true;
    this.getSpecificAudio(chapterId,reciterId);
  

 
  }
  
}
