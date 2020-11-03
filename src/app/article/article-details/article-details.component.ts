import { Article } from '../article';
import { Component, OnInit, Input } from '@angular/core';
import { ArticleService } from '../article.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html'
})
export class ArticleDetailsComponent implements OnInit {

  id: number;
  article: Article;

  constructor(private route: ActivatedRoute, private router: Router,
              private articleService: ArticleService) { }

  ngOnInit(): void {
    this.article = new Article();
    this.id = this.route.snapshot.params.id;

    this.articleService.getArticle(this.id)
      .subscribe(data => {
        console.log(data);
        this.article = data;
      }, error => console.log(error));
  }

  list(): void {
    this.router.navigate(['articles']);
  }
}
