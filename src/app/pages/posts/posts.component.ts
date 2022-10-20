import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any = [];
  users: any = []
  constructor(private _http: HttpClient, private _auth: AuthServiceService) { }

  ngOnInit(): void {
    this._auth.getPosts().subscribe(result => {
      this.posts = result;
    });
  }

}
