import { Component } from '@angular/core';
import {ArticleService} from './article/article.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  submitted = false;

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.submitted = true;
  }
}
