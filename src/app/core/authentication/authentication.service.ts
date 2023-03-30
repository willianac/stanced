import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject, tap } from "rxjs";
import { TokenService } from "./token.service";
import { IFullUser, IUser } from "./user";

@Injectable({
    providedIn : "root"
})
export class AuthenticationService {
    user = new BehaviorSubject("")

    constructor(private http: HttpClient, private token: TokenService) {
        this.token.hasToken() && 
            this.notify()
    }

    public register(user: IFullUser): Observable<IFullUser> {
        return this.http.post<IFullUser>("http://localhost:3000/register", user)
    }

    public login(user: IUser): Observable<IUser> {
        return this.http.post<IUser>("http://localhost:3000/login", user).pipe(
            tap(val => {
                this.token.setToken(val.username)
                this.notify()
            }) 
        )
    }

    public logout() {
        this.token.deleteToken()
        this.user.next("")
    }

    public getUser() {
        return this.user.asObservable()
    }

    private notify() {
        const token = this.token.getToken()
        this.user.next(token)
    }
}