import { Injectable } from "@angular/core";
import jwtDecode from "jwt-decode";
import { JWTtoken } from "./user";

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

	getDecodedToken(): JWTtoken {
		const token = this.getToken();
		return jwtDecode(token)
	}

	setItem(key: string, value: string) {
		window.localStorage.setItem(key, value)
	}

	getItem(key: string) {
		return window.localStorage.getItem(key)
	}

	removeItem(key: string) {
		window.localStorage.removeItem(key)
	}
}