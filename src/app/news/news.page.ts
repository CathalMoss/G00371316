import { Component, OnInit } from '@angular/core';
//newService api
import { NewsService } from '../news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage {

  articles;

  constructor(private newsService:NewsService) {

   }

   //will update everytime it is click
  ionViewWillEnter() {
    this.newsService.GetNewsData().subscribe(
      (data)=>{
        console.log(data);
        this.articles = data['articles'];
      }
    );
  }
}
