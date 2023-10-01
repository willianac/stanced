import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin, map } from "rxjs";
import { ICarPicture } from "src/app/shared/models/carro";
import { LikesService } from "./likes.service";
import { TokenService } from "../authentication/token.service";

@Injectable({
    providedIn : "root"
})
export class CarrosService {
    private cacheData: ICarPicture[] = []
    private userid: number = this.token.getDecodedToken().id

    constructor(private http: HttpClient, private likesService: LikesService, private token: TokenService) {}

    private likes = this.likesService.getLikes()
    private pictures = this.http.get<ICarPicture[]>("http://localhost:3000/getimages?userid=" + this.userid)

    public getCars(): Observable<ICarPicture[]> {
        return forkJoin([this.likes, this.pictures]).pipe(
            map(([likesCount, cars]) => {
                return cars.map(car => (
                    {...car, likes: likesCount[car.id]}
                ))
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