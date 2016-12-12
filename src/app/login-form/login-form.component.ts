import { Component, OnInit } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  apiUri = 'http://localhost:3000/api/';
  submitted: boolean = false;
  valid: boolean = false;
  message: string = '';
  model: any = {
    username: '',
    password: ''
  };
  constructor(private http: Http) {
  }


  login(): string {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //this.http.post();
    return 'Error on Sign-up, please refresh and try again!';
  }

  validate(): any {
    if (this.model.username !== '') {
      if (this.model.password.length > 5) {
        return ({
          valid: true,
          message: 'Cool youre good'
        });
      }
      else {
        return ({
          valid: false,
          message: 'Password must be at least 6 characters long'
        });
      }
    }
    return ({
      valid: false,
      message: 'Please specify a username to sign up'
    })
  }
  onRegister(): boolean {
    let message = this.validate().valid ? this.login(): this.validate().message;
    this.message = message;
    return false;
  }

  ngOnInit() {
  }

}
