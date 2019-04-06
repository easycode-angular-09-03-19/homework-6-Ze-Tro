import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "../../services/users.service";
import { Location } from "@angular/common";
import { User } from "../../interfaces/user-item";
import { FlashMessagesService } from 'angular2-flash-messages';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  user: User;
  templateUser: User;
  readonly = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UsersService,
    private location: Location,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.userService.getuserById(id).subscribe((data: User) => {
      this.user = data;
    }, (err) => {
      console.log(err);
    });
  }

  editInfo() {
    this.readonly = false;
    this.templateUser = Object.assign({}, this.user);
  }

  saveChanges() {
    this.userService.updateUserInfo(this.user).subscribe((data) => {
      this.readonly = true;
      this.flashMessagesService.show('User info changed successfully!', { cssClass: 'alert-success', timeout: 2000 });
      setTimeout(() => {
        this.location.back();
      }, 2100);
    }, (err) => {
      this.flashMessagesService.show('Something went wrong!', { cssClass: 'alert-danger', timeout: 2000 });
    });
  }

  cancelChanges() {
    this.user = this.templateUser;
    this.readonly = true;
  }
}