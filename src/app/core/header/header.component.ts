import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username$ = this.auth.getUser()
  isPopOverMenuOpen = false

  constructor(
    private auth: AuthenticationService, 
    private router: Router, 
  ){}

  public handlePopOverMenu() {
    this.isPopOverMenuOpen = !this.isPopOverMenuOpen
  }

  public fazerLogout() {
    this.auth.logout()
    this.router.navigateByUrl("")
  }
}
