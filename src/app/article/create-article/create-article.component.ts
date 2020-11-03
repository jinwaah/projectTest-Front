import { ArticleService } from '../article.service';
import { Article } from '../article';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-article',
  templateUrl: './create-article.component.html'
})
export class CreateArticleComponent implements OnInit {

  article: Article = new Article();
  submitted = false;

  constructor(private articleService: ArticleService,
              private router: Router) { }

  ngOnInit(): void {
  }

  newArticle(): void {
    this.submitted = false;
    this.article = new Article();
  }

  save(): void {
    this.articleService
      .createArticle(this.article).subscribe(data => {
        console.log(data);
        this.article = new Article();
        this.gotoList();
      },
      error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.save();
  }

  gotoList(): void {
    this.router.navigate(['/articles']);
  }
}
