import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { Observable, tap } from "rxjs";
import { HttpClient, HttpEvent, HttpEventType } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

import { environment } from "src/environments/environment.development";

type ResponseOk = {
  auth: boolean,
  token: string
}

type ResponseError = {
	success: boolean
	message: string
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

	public changeName(newName: string): Observable<ResponseOk | ResponseError> {
		const userid = this.tokenService.getDecodedToken().id
		return this.http.put<ResponseOk | ResponseError>(environment.apiUrl + "/changeusername", { userid, newName }).pipe(
			tap((res) => {
				if("token" in res) {
					this.updateToken(res.token)
				}
			})
		)
	}

	public changeEmail(newEmail: string): Observable<ResponseOk | ResponseError> {
		const userid = this.tokenService.getDecodedToken().id
		return this.http.put<ResponseOk | ResponseError>(environment.apiUrl + "/changeuseremail", { userid, newEmail }).pipe(
			tap((res) => {
				if("success" in res) {
					throw new Error(res.message)
				}
				this.updateToken(res.token)
			})
		)
	}

	public setProfileAvatar(imgFile: any): Observable<HttpEvent<ResponseOk>> {
		const userid = this.tokenService.getDecodedToken().id
		const data = new FormData();
		data.append("image", imgFile)
		data.append("userid", userid)
		return this.http.post<ResponseOk>(environment.apiUrl + "/profileavatar", data, {
			observe: "events",
			reportProgress: true
		}).pipe(
			tap((event) => {
				if(event.type === HttpEventType.Response) {
					this.updateToken(event.body?.token ?? "")
				}
			})
		)
	}

	public removeProfileAvatar(): Observable<ResponseOk | ResponseError> {
		const userid = this.tokenService.getDecodedToken().id
		return this.http.delete<ResponseOk | ResponseError>(environment.apiUrl + "/profileavatar", { body: { userid } }).pipe(
			tap((res) => {
				if("token" in res) {
					this.updateToken(res.token)	
				}
			})
		)
	}

	private updateToken(token: string) {
		this.tokenService.deleteToken()
		this.tokenService.setToken(token)
		this.authService.notify()
	}
}