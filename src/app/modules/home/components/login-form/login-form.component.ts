import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { IFullUser, IUser } from 'src/app/core/authentication/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]]
  })
  // user$ = Observable<IUser>
  // user!: string

  constructor(private router: Router, private auth: AuthenticationService, private fb: FormBuilder) {}

  public fazerLogin() {
    const usuario = this.loginForm.getRawValue() as IFullUser
    this.auth.login(usuario).subscribe({
      next : () => this.router.navigateByUrl('dashboard'),
      error: (err) => console.error(err)
    })
  }

  // ngOnInit() {
  //   this.auth.getUser().subscribe({
  //     next: (value) => this.user = value
  //   })
  // }
}