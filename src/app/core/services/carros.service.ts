import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, from, tap } from "rxjs";
import { ICarPicture } from "src/app/shared/models/carro";

@Injectable({
    providedIn : "root"
})
export class CarrosService {
    private cacheData: ICarPicture[] = []

    constructor(private http: HttpClient) {}

    public retornaCarros(): Observable<ICarPicture[]> {
        if(this.cacheData.length) {
            console.log("cache existe, requsição nao")
            return from([this.cacheData])
        }
        console.log("nao há cache, fazendo requisição")
        return this.http.get<ICarPicture[]>("http://localhost:3000/getimages").pipe(
            tap(res => {
                this.cacheData = res
            })
        )
    } 
    public clearCache() {
        this.cacheData.splice(0)
    }
    
}