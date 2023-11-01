import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { AuthenticationService } from "../authentication/authentication.service";

@Component({
	selector: "app-header",
	templateUrl: "./header.component.html",
	styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
	username$ = this.auth.getUser()
	avatar = ""
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

	ngOnInit(): void {
		this.auth.getAvatar().subscribe({
			next: (imgUrl) => this.avatar = imgUrl
		})
	}
}
