import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, from, tap } from "rxjs";
import { ICarPicture } from "src/app/shared/models/carro";

@Injectable({
    providedIn : "root"
})
export class CarrosService {
    private cacheData!: ICarPicture[]
    constructor(private http: HttpClient) {}

    public retornaCarros(): Observable<ICarPicture[]> {
        if(this.cacheData) {
            return from([this.cacheData])
        }
        return this.http.get<ICarPicture[]>("http://localhost:3000/getimages").pipe(
            tap(res => {
                this.cacheData = res
            })
        )
    }
}