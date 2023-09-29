import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, from, map, tap } from "rxjs";
import { ICarPicture } from "src/app/shared/models/carro";

@Injectable({
    providedIn : "root"
})
export class CarrosService {
    private cacheData: ICarPicture[] = []

    constructor(private http: HttpClient) {}

    public retornaCarros(): Observable<ICarPicture[]> {
        if(this.cacheData.length) {
            return from([this.cacheData])
        }
        return this.http.get<ICarPicture[]>("http://localhost:3000/getimages").pipe(
            tap(res => {
                this.cacheData = res
            }),
            map((res) => {
                return res.map((car => {
                    return {...car, description : car.description}
                }))
            })
        )
    }
    
    public getCarsByID(id: number): Observable<ICarPicture[]> {
        return this.http.get<ICarPicture[]>("http://localhost:3000/getimagesbyuserid?id=" + id)
    }

    public clearCache() {
        this.cacheData.splice(0)
    }
}