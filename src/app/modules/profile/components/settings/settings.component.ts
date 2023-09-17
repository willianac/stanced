import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core/authentication/token.service';
import { JWTtoken } from 'src/app/core/authentication/user';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  userInfo!: JWTtoken;
  constructor(private tokenService: TokenService) {}


  ngOnInit(): void {
    this.userInfo = this.tokenService.getDecodedToken()
    console.log(this.userInfo)
  }
}
