import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../interfaces/user-item';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }
  getuserById(id: string) {
    return this.http.get(`${this.apiUrl}/users/${id}`);
  }

  updateUserInfo(user: User) {
    return this.http.put(`${this.apiUrl}/users/${user.id}`, user);
  }
}