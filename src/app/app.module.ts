import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { CreateArticleComponent } from './article/create-article/create-article.component';
import { ArticleDetailsComponent } from './article/article-details/article-details.component';
import { ArticleListComponent } from './article/article-list/article-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateArticleComponent } from './article/update-article/update-article.component';
import {CreateUserComponent} from './user/create-user/create-user.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {UpdateUserComponent} from './user/update-user/update-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateArticleComponent,
    ArticleDetailsComponent,
    ArticleListComponent,
    UpdateArticleComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
