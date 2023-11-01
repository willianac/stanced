import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

import { environment } from "src/environments/environment.development";

type Response = {
  auth: boolean,
  token: string
}

@Injectable({
	providedIn: "root"
})
export class UserInfoService {
	constructor(
    private tokenService: TokenService, 
    private http: HttpClient, 
    private authService: AuthenticationService
	) {}

	public changeName(newName: string): Observable<Response> {
		const userid = this.tokenService.getDecodedToken().id
		return this.http.put<Response>(environment.apiUrl + "/changeusername", { userid, newName }).pipe(
			tap((res) => {
				this.tokenService.deleteToken()
				this.tokenService.setToken(res.token)
				this.authService.notify()
			})
		)
	}

	public changeEmail(newEmail: string): Observable<Response> {
		const userid = this.tokenService.getDecodedToken().id
		return this.http.put<Response>(environment.apiUrl + "/changeuseremail", { userid, newEmail }).pipe(
			tap((res) => {
				this.tokenService.deleteToken()
				this.tokenService.setToken(res.token)
				this.authService.notify()
			})
		)
	}

	public setProfileAvatar(imgFile: any): Observable<Response> {
		const userid = this.tokenService.getDecodedToken().id
		const data = new FormData();
		data.append("image", imgFile)
		data.append("userid", userid)
		return this.http.post<Response>(environment.apiUrl + "/profileavatar", data).pipe(
			tap((res) => {
				this.tokenService.deleteToken()
				this.tokenService.setToken(res.token)
				this.authService.notify()
			})
		)
	}

	public removeProfileAvatar(): Observable<Response> {
		const userid = this.tokenService.getDecodedToken().id
		return this.http.delete<Response>(environment.apiUrl + "/profileavatar", { body: { userid } }).pipe(
			tap((res) => {
				this.tokenService.deleteToken()
				this.tokenService.setToken(res.token)
				this.authService.notify()
			})
		)
	}
}