import { Component, OnInit } from '@angular/core';
import { Article } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html'
})
export class UpdateArticleComponent implements OnInit {

  id: number;
  article: Article;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private articleService: ArticleService) { }

  ngOnInit(): void{
    this.article = new Article();
    this.id = this.route.snapshot.params.id;

    this.articleService.getArticle(this.id)
      .subscribe(data => {
        console.log(data);
        this.article = data;
      }, error => console.log(error));
  }

  updateArticle(): void {
    this.articleService.updateArticle(this.id, this.article)
      .subscribe(data => {
        console.log(data);
        this.article = new Article();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateArticle();
  }

  gotoList(): void {
    this.router.navigate(['/articles']);
  }
}
