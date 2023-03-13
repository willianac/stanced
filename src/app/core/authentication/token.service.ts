import { Injectable } from "@angular/core";

@Injectable({
    providedIn : "root"
})
export class TokenService {
    hasToken(): boolean {
        return !!this.getToken()
    }

    getToken(): string {
        return window.localStorage.getItem("x-access-token") ?? ""
    }

    setToken(token: string) {
        window.localStorage.setItem("x-access-token", token)
    }

    deleteToken() {
        window.localStorage.removeItem("x-access-token")
    }
}