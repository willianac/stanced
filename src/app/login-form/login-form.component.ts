import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from './login/IUser';
import { LoginService } from './login/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  user: UserInterface = {
    name: "",
    email: "",
    password: "",
    confirmPass: ""
  }
  
  constructor(private router: Router, private loginservice: LoginService) {}
  
  submit(user: any, event: Event): void {
    event.preventDefault()
    this.loginservice.salvarUsuario(user).subscribe({
      next : (resposta) => {
        console.log(resposta)
        this.router.navigateByUrl("teste")
      }
    })
  }
}
