import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn : "root"
})
export default class NewCarService {
    constructor(private http: HttpClient) {}

    public sendNewCar(newcar: FormData) {
        this.http.post("http://localhost:3000/sendimage", newcar).subscribe()
    }
};