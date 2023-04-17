import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication/authentication.service';
import { IFullUser } from 'src/app/core/authentication/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm = this.fb.group({
    name : ["", [Validators.minLength(2), Validators.required]],
    email : ["", [Validators.email, Validators.required]],
    password : ["", [Validators.minLength(6), Validators.required]]
  })
  
  constructor(private fb: FormBuilder, private auth: AuthenticationService, private router: Router) {}

  public registrar() {
    const formValue = this.registerForm.getRawValue() as IFullUser;
    this.auth.register(formValue).subscribe({
      next : (response) => this.router.navigateByUrl("dashboard"),
      error : (error) => console.error(error.statusText)
    })
  }
}
