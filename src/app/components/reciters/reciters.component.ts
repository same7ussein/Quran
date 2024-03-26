import { RecitersService } from './../../shared/services/reciters.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReciterInfo } from 'src/app/shared/interfaces/reciter-info';
import { FormsModule, NgModel } from '@angular/forms';
import { ReciterSearchPipe } from 'src/app/shared/pipes/reciter-search.pipe';
import { QuranService } from 'src/app/shared/services/quran.service';
import { QuranAudioComponent } from '../quran-audio/quran-audio.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-reciters',
  standalone: true,
  imports: [CommonModule,
    RouterLink,
  
    FormsModule,
    ReciterSearchPipe,
    QuranAudioComponent
  ],
  templateUrl: './reciters.component.html',
  styleUrls: ['./reciters.component.scss']
})
export class RecitersComponent implements OnInit {
  searchInput!:string;
 reciterInfo:ReciterInfo[]=[
  {  

  name:"AbdulBaset AbdulSamad" ,
  img: "./assets/images/AbdulBaset AbdulSamad.jpg",
  style:"Mujawwad"

  },
  {
    name:"AbdulBaset AbdulSamad" ,
    img: "./assets/images/AbdulBaset AbdulSamad.jpg",
    style:"Murattal"
  
  },
  {
   name:"Abdur-Rahman as-Sudais" ,
   img:"./assets/images/Abdur-Rahman as-Sudais.jpg",
   style:"Murttal"
   
  },
  {  name:"abu-bakr-al-shatri",
    img:  "./assets/images/abu-bakr-al-shatri-pofile.avif",
    style:"Murattal"

  },
  {
    name:"Hani ar-Rifai",
    img: "./assets/images/Hani ar-Rifai.jpg",
    style:"Murattal"
  }
  ,{
    name:"Mahmoud Khalil Al-Husary",
    img: "./assets/images/Mahmoud Khalil Al-Husary.jpg",
    style:"Murattal"
  }
  ,
  {
    name:"Mishari Rashid al-`Afasy",
    img: "./assets/images/Mishari Rashid al-`Afasy.jpg",
    style:"Murattal"
  },
  {
    name:"Mohamed Siddiq al-Minshawi",
    img: "./assets/images/Mohamed Siddiq al-Minshawi.jpg",
    style:"Mujwaad"
  }
  ,
  {
    name:"Mohamed Siddiq al-Minshawi",
    img: "./assets/images/Mohamed Siddiq al-Minshawi.jpg",
    style:"Murattal"
  }
  ,{
    name:"Sa`ud ash-Shuraym",
    img: "./assets/images/Sa`ud ash-Shuraym.jpg",
    style:"Murattal"
  },

  {
  name:"Abdul Muhsin AlQasim",
  img:"./assets/images/abdulmohsen-al-qasim.png",
  style:"Murattal"
  }
  ,{
    name:"Mahmoud Khalil Al-Husary",
    img:"./assets/images/Mahmoud Khalil Al-Husary.jpg",
    style:"Muallaim"
  }
 
 ];
 constructor(private reciterservice: RecitersService){

 }
  ngOnInit(): void {
  
  }

 



}

