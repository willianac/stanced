import { Injectable } from "@angular/core";
import { TokenService } from "./token.service";
import { Observable, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { AuthenticationService } from "./authentication.service";

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
    return this.http.put<Response>("http://localhost:3000/changeusername", { userid, newName }).pipe(
      tap((res) => {
        this.tokenService.deleteToken()
        this.tokenService.setToken(res.token)
        this.authService.notify()
      })
    )
  }

  public changeEmail(newEmail: string): Observable<Response> {
    const userid = this.tokenService.getDecodedToken().id
    return this.http.put<Response>("http://localhost:3000/changeuseremail", { userid, newEmail }).pipe(
      tap((res) => {
        this.tokenService.deleteToken()
        this.tokenService.setToken(res.token)
        this.authService.notify()
      })
    )
  }
}