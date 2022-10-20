import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginFormGroup!: FormGroup;
  constructor(private _auth: AuthServiceService) { }

  ngOnInit(): void {
    this.initiForm();
  }

  initiForm() {
    this.loginFormGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  loginProcess() {
    if ( this.loginFormGroup.valid ) {
      this._auth.login(this.loginFormGroup.value).subscribe(result => {
        console.log(result);
      });
    }
  }

}
