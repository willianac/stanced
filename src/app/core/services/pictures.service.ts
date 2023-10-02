import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin, map } from "rxjs";
import { IPicture } from "src/app/shared/models/Picture";
import { LikesService } from "./likes.service";
import { TokenService } from "../authentication/token.service";

@Injectable({
    providedIn : "root"
})
export class PicturesService {
    private cacheData: IPicture[] = []
    private userid: number = this.token.getDecodedToken().id

    constructor(private http: HttpClient, private likesService: LikesService, private token: TokenService) {}

    private likes = this.likesService.getLikes()
    private pictures = this.http.get<IPicture[]>("http://localhost:3000/getimages?userid=" + this.userid)

    public getPictures(): Observable<IPicture[]> {
        return forkJoin([this.likes, this.pictures]).pipe(
            map(([likesCount, pictures]) => {
                return pictures.map(picture => (
                    {...picture, likes: likesCount[picture.id]}
                ))
            })
        )
    }
    
    public getPicturesByUserId(id: number): Observable<IPicture[]> {
        return this.http.get<IPicture[]>("http://localhost:3000/getimagesbyuserid?id=" + id)
    }

    public clearCache() {
        this.cacheData.splice(0)
    }
}