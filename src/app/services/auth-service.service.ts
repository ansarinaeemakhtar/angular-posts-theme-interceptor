import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private _http: HttpClient) { }
  login (data: any) {
    return this._http.post(`${baseUrl}login`, data);
  }

  getPosts () {
    return this._http.get(`${baseUrl}/posts`);
  }

  getUser (userId: number) {
    return this._http.get(`${baseUrl}/users/${userId}`);
  }
}
