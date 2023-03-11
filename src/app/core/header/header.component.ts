import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  username = ""

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.getUser().subscribe({
      next : (name) => this.username = name
    })
  }
}
