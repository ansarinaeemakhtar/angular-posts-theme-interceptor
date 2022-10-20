import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userId: number = 0;
  userDetail: any;
  constructor(private _router: Router, private _route: ActivatedRoute, private _auth: AuthServiceService) { }

  ngOnInit(): void {
    this.userId = this._route.snapshot.params['id'];

    this._auth.getUser(this.userId).subscribe(result => this.userDetail = result);
  }

}
