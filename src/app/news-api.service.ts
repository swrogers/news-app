import { Injectable } from '@angular/core';

import { APIKEY } from '../../../news-api-key';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {

  constructor(private http:HttpClient) { }

  initSources() {
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${APIKEY}`);
  }

  initArticles() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${APIKEY}`);
  }

  getArticlesByID(source: String) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${APIKEY}`);
  }
}
