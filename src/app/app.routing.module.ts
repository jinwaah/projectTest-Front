import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import {HomeComponent} from './home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'articles', component: ArticleListComponent },
  { path: 'users', component: UserListComponent },
  { path: 'addArticle', component: CreateArticleComponent },
  { path: 'addUser', component: CreateUserComponent },
  { path: 'updateArticle/:id', component: UpdateArticleComponent },
  { path: 'updateUser/:id', component: UpdateUserComponent },
  { path: 'detailsArticle/:id', component: ArticleDetailsComponent },
  { path: 'detailsUser/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
