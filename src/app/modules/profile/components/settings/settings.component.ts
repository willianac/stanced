import { animate, style, transition, trigger } from "@angular/animations";
import { HttpEventType } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/core/authentication/authentication.service";
import { TokenService } from "src/app/core/authentication/token.service";
import { JWTtoken } from "src/app/core/authentication/user";
import { UserInfoService } from "src/app/core/authentication/user-info.service";

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
	selector: "app-settings",
	templateUrl: "./settings.component.html",
	styleUrls: ["./settings.component.css"],
	animations: [fadeIn, fadeOut]
})
export class SettingsComponent implements OnInit {
	userInfo!: JWTtoken;
	userAvatar!: string
	showModal = false;
	modalEditType!: "name" | "email";
	showAvatarMenu = false;

	isUploading = false;
  
	constructor(
		private tokenService: TokenService, 
		private userInfoService: UserInfoService, 
		private auth: AuthenticationService
	) {}

	public openModal(editType: "name" | "email") {
		this.modalEditType = editType
		this.showModal = true
	}

	public closeModal() {
		this.showModal = false
	}

	public handleAvatarMenu() {
		this.showAvatarMenu = !this.showAvatarMenu
	}

	public onFileChange(event: any) {
		this.isUploading = true
		this.showAvatarMenu = false
		this.userInfoService.setProfileAvatar(event.target.files[0]).subscribe({
			complete: () => this.isUploading = false
		})
	}

	public removeAvatar() {
		this.handleAvatarMenu()
		this.userInfoService.removeProfileAvatar().subscribe()
	}

	ngOnInit(): void {
		this.userInfo = this.tokenService.getDecodedToken()
		this.auth.getAvatar().subscribe({
			next: (imgUrl) => this.userAvatar = imgUrl
		})
	}
}
