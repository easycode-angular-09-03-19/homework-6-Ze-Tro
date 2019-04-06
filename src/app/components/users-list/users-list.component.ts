import { Component, OnInit } from '@angular/core';
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users;

  constructor(
    public usersService: UsersService
  ) {}

  ngOnInit() {
    this.usersService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(data);
    }, (err) => {
      console.log(err);
    });
  }
}