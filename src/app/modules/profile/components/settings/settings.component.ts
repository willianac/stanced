import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/core/authentication/token.service';
import { JWTtoken } from 'src/app/core/authentication/user';

const enterTransition = transition(":enter", [
  style({
    opacity: 0
  }),
  animate("0.1s linear", style({ opacity: 1 }))
])
const leaveTransition = transition(":leave", [
  style({
    opacity: 1
  }),
  animate("0.1s linear", style({ opacity: 0 }))
])
const fadeIn = trigger("fadeIn", [enterTransition])
const fadeOut = trigger("fadeOut", [leaveTransition])

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
  animations: [fadeIn, fadeOut]
})
export class SettingsComponent implements OnInit {
  userInfo!: JWTtoken;
  showModal = false;
  modalEditType!: "name" | "email";
  
  constructor(private tokenService: TokenService) {}

  public openModal(editType: "name" | "email") {
    this.modalEditType = editType
    this.showModal = true
  }

  public closeModal() {
    this.showModal = false
  }

  ngOnInit(): void {
    this.userInfo = this.tokenService.getDecodedToken()
  }
}
