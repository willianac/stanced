import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  name!: string;
  email!: string
  password!: string;
  confirmPass!: string;
  
  constructor(private router: Router) {}
  
  submit(user: any, event: Event): void {
    event.preventDefault()
    this.router.navigateByUrl("/teste")
  }
  
}
