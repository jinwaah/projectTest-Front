import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private baseUrl = 'http://localhost:8080/springboot-crud-rest/api/v1/articles';

  constructor(private http: HttpClient) { }

  getArticle(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createArticle(article: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`, article);
  }

  updateArticle(id: number, value: any): Observable<object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteArticle(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getArticlesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
