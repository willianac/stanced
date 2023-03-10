import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { IUser } from 'src/app/core/authentication/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit{
  username!: string;
  password!: string;

  user$ = Observable<IUser>
  user!: string

  constructor(private router: Router, private auth: AuthenticationService) {}

  public fazerLogin() {
    this.auth.login({username: this.username, password : this.password}).subscribe({
      next : (response) => console.log(response),
      error: (err) => console.log(err)
    })
  }

  ngOnInit() {
    this.auth.getUser().subscribe({
      next: (value) => this.user = value
    })
  }
}
