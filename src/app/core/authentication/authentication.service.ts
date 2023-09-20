import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";

import jwt_decode from "jwt-decode";
import { TokenService } from "./token.service";
import { IFullUser, JWTtoken } from "./user";


@Injectable({
    providedIn : "root"
})
export class AuthenticationService {
    user = new BehaviorSubject("")

    constructor(private http: HttpClient, private token: TokenService) {
        if(this.token.hasToken()) {
            this.validateToken()
        } 
    }

    public register(user: IFullUser): Observable<any> {
        return this.http.post<any>("http://localhost:3000/register", user).pipe(
            tap(val => {
                this.token.setToken(val.token)
                this.notify()
            })
        )
    }

    public login(user: IFullUser): Observable<any> {
        return this.http.post<any>("http://localhost:3000/login", user).pipe(
            tap(val => {
                this.token.setToken(val.token)
                this.notify()
            }) 
        )
    }

    public logout() {
        this.token.deleteToken()
        this.user.next("")
    }

    public validateToken() {
        const token = this.token.getToken()
        this.http.post("http://localhost:3000/verifytoken", {token}).subscribe({
            next : (val) => this.notify(),
            error : (err) => this.logout()
        })
    }

    public getUser() {
        return this.user.asObservable()
    }

    public notify() {
        const token = this.token.getToken()
        const decoded: JWTtoken = jwt_decode(token)
        this.user.next(decoded.name)
    }
}