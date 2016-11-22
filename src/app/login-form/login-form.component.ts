import { Component, OnInit } from '@angular/core';
import { User } from '../user';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  submitted: boolean = false;
  valid: boolean = false;
  message: string = '';
  model = new User('','');
  constructor() {
   }


  login(): string {
    return "Yay!";
  }

  validate(): any {
    if (this.model.name !== '' && this.model.groupCode !== '') {
      return ({
        valid: true,
        message: 'Cool youre good'
      })
    }
    return ({
      valid: false,
      message: 'Bad'
    })
  }
  onSubmit(): boolean {
    let message = this.validate().valid ? this.login(): this.validate().message;
    this.message = message;
    return false;
  }

  ngOnInit() {
  }

}
