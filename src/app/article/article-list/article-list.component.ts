import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html'
})
export class ArticleListComponent implements OnInit {
  articles: Observable<Article[]>;

  constructor(private articleService: ArticleService,
              private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.articles = this.articleService.getArticlesList();
  }

  deleteArticle(id: number): void {
    this.articleService.deleteArticle(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  articleDetails(id: number): void {
    this.router.navigate(['detailsArticle', id]);
  }
  updateArticle(id: number): void {
    this.router.navigate(['updateArticle', id]);
  }
}
