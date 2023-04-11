import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../authentication/token.service";

@Injectable({
    providedIn : "root"
})
export default class NewCarService {
    constructor(private http: HttpClient, private token: TokenService) {}

    public sendNewCar(newcar: FormData): Observable<any>{
        const token = this.token.getDecodedToken()
        newcar.append("userid", token.id.toString())
        return this.http.post<any>("http://localhost:3000/sendimage", newcar)
    }
};