import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) {}

  getPostsByUserId(id: string) {
    return this.http.get(`${this.apiUrl}/posts?userId=${id}`);
  }
}