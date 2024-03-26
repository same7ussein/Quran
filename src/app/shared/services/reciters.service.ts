import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecitersService {

  constructor(private _httpClient :HttpClient) { }

  getAyahasByReciters(Reciter:number):Observable<any>{
  return this._httpClient.get(`https://api.quran.com/api/v4/chapter_recitations/${Reciter}`);
  }
}
