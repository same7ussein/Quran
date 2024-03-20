import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class QuranService {

  constructor(private _HttpClient:HttpClient) { }


  suraName():Observable<any>{
    return this._HttpClient.get(`https://api.quran.com/api/v4/chapters`)
  }
  SpecialQuran(id:number):Observable<any>{
    return this._HttpClient.get(`https://api.quran.com/api/v4/quran/verses/indopak?chapter_number=${id}`)
  }
  QuranSpecialAudio(chapter:number ,Recitation:number=7):Observable<any>{
    return this._HttpClient.get(`https://api.quran.com/api/v4/chapter_recitations/${Recitation}/${chapter}`)
  }
  recitations():Observable<any>{
    return this._HttpClient.get(`https://api.quran.com/api/v4/resources/recitations?language=ar`)
  }
}
