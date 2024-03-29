import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";

import jwt_decode from "jwt-decode";
import { TokenService } from "./token.service";
import { IFullUser, JWTtoken } from "./user";

import { environment } from "src/environments/environment.development";
import { Router } from "@angular/router";

@Injectable({
	providedIn : "root"
})
export class AuthenticationService {
	user = new BehaviorSubject("")
	avatar = new BehaviorSubject("")

	constructor(private http: HttpClient, private token: TokenService, private router: Router) {
		if(this.token.hasToken()) {
			this.validateToken()
		} 
	}

	public register(user: IFullUser): Observable<any> {
		return this.http.post<any>(environment.apiUrl + "/register", user).pipe(
			tap(val => {
				this.token.setToken(val.token)
				this.notify()
			})
		)
	}

	public login(user: IFullUser): Observable<any> {
		return this.http.post<any>(environment.apiUrl + "/login", user).pipe(
			tap(val => {
				this.token.setToken(val.token)
				this.notify()
			}) 
		)
	}

	public logout() {
		this.token.deleteToken()
		this.token.removeItem("avatar")
		this.user.next("")
		this.avatar.next("")
	}

	public validateToken() {
		const token = this.token.getToken()
		this.http.post(environment.apiUrl + "/verifytoken", {token}).subscribe({
			next : () => this.notify(),
			error : () => {
				this.logout()
				this.router.navigateByUrl("auth")
			}
		})
	}

	public getUser() {
		return this.user.asObservable()
	}

	public getAvatar() {
		return this.avatar.asObservable()
	}

	public notify() {
		const token = this.token.getToken()
		const decoded: JWTtoken = jwt_decode(token)
		this.user.next(decoded.name)
		this.avatar.next(decoded.avatar)
	}
}