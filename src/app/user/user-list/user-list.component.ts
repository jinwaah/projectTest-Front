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
  users: Observable<User[]>;

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void {
    this.users = this.userService.getUsersList();
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

  userDetails(id: number): void {
    this.router.navigate(['detailsUser', id]);
  }
  updateUser(id: number): void {
    this.router.navigate(['updateUser', id]);
  }
}
