import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ICarro } from "src/app/shared/models/carro";

@Injectable({
    providedIn : "root"
})
export class CarrosService {
    constructor(private http: HttpClient) {}

    public retornaCarros(): Observable<ICarro[]> {
        return this.http.get<ICarro[]>("http://localhost:3000/carros")
    }
}