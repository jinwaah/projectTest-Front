import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnInit {
  articles: Observable<User[]>;

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.articles = this.userService.getUsersList();
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  usersDetails(id: number): void {
    this.router.navigate(['details', id]);
  }
  updateUser(id: number): void {
    this.router.navigate(['update', id]);
  }
}
