import { SuraAudio } from './../../shared/interfaces/sura-audio';
import { Sura } from './../../shared/interfaces/sura';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuranService } from 'src/app/shared/services/quran.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reading-sura',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reading-sura.component.html',
  styleUrls: ['./reading-sura.component.scss']
})
export class ReadingSuraComponent implements OnInit {
constructor(private _QuranService:QuranService , private _ActivatedRoute:ActivatedRoute){}
suraId:any=0
suraopj:Sura={} as Sura
suraAudio:SuraAudio={} as SuraAudio;
ngOnInit(): void {
    this.getSuraId()
    this.getSpecialSura()
    this.getSpecialaudio()
    this.getReciter()
}

getSuraId():void{
this._ActivatedRoute.paramMap.subscribe({
  next:(res)=>{
    // console.log(res.get('id'));
    this.suraId=res.get('id');
    
  }
})
}

getSpecialSura():void{
  this._QuranService.SpecialQuran(this.suraId).subscribe({
    next:(res)=>{
      // console.log(res.verses);
      this.suraopj=res.verses
    }
  })
}
getSpecialaudio():void{
  this._QuranService.QuranSpecialAudio(this.suraId).subscribe({
    next:(res)=>{
      // console.log(res.audio_file);
      this.suraAudio=res.audio_file
    }
  })
}
getReciter():void{
  this._QuranService.recitations().subscribe({
    next:(res)=>{
      console.log(res);
      
    }
  })
}


}
