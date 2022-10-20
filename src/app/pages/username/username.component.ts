import { Component, Input, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  @Input() public userid: number = 0;
  username: any;
  constructor(private _auth: AuthServiceService) { }

  ngOnInit(): void {
    this._auth.getUser(this.userid).subscribe((result: any) => this.username = result.name);
  }

}
