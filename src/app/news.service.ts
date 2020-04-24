import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  //key got on new.org after registering
  API_KEY = 'e6f24495ef09479698ac9aed881079a6';

  constructor(private httpClient:HttpClient) { }
 
  //read api news from external http
  GetNewsData():Observable<any>{
    return this.httpClient.get('http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    'apiKey=e6f24495ef09479698ac9aed881079a6')
  }



}