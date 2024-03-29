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
constructor(private _QuranService:QuranService , private _ActivatedRoute:ActivatedRoute){}
suraId:any=0
suraopj:any
suraAudio:SuraAudio={} as SuraAudio;
reciterId:number=7
reciters:Reciter[]=[]
toggle:boolean = true
ngOnInit(): void {
    this.getSuraId()
    this.getSpecialSura()
    this.getSpecialaudio()
    this.getReciter()
}

getSuraId():void{
this._ActivatedRoute.paramMap.subscribe({
  next:(res)=>{
    this.suraId=res.get('id');
    
  }
})
}

getSpecialSura():void{
  this._QuranService.SpecialQuran(this.suraId).subscribe({
    next:(res)=>{
      console.log(res.verses);
      this.suraopj=res.verses
    }
  })
}
getSpecialaudio():void{
  this._QuranService.QuranSpecialAudio(this.suraId).subscribe({
    next:(res)=>{
      this.suraAudio=res.audio_file
    }
  })
}
getReciter():void{
  this._QuranService.recitations().subscribe({
    next:(res)=>{
      console.log(res);
      this.reciters=res.recitations
      
      
    }
  })
}
reciterchange():void{
  this._QuranService.QuranSpecialAudio(this.suraId,this.reciterId).subscribe({
    next:(res)=>{
      this.suraAudio=res.audio_file
    }
  })
  
}




}
