import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {

  id: number;
  user: User;
  submitted = false;

  constructor(private route: ActivatedRoute, private router: Router,
              private articleService: UserService) { }

  ngOnInit(): void{
    this.user = new User();
    this.id = this.route.snapshot.params.id;

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data);
        this.user = data;
      }, error => console.log(error));
  }

  updateUser(): void {
    this.userService.updateUser(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit(): void {
    this.submitted = true;
    this.updateUser();
  }

  gotoList(): void {
    this.router.navigate(['/users']);
  }
}
