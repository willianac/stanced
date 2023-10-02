import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin, map, tap } from "rxjs";
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

	public sendNewPicture(newPicture: FormData): Observable<void>{
		const token = this.token.getDecodedToken()
		newPicture.append("userid", token.id.toString())
		return this.http.post<void>("http://localhost:3000/sendimage", newPicture).pipe(
			tap(() => this.clearCache())
		)
	}
    
	public getPicturesByUserId(id: number): Observable<IPicture[]> {
		return this.http.get<IPicture[]>("http://localhost:3000/getimagesbyuserid?id=" + id)
	}

	public deletePicture(pictureID: string): Observable<void> {
		return this.http.delete<void>("http://localhost:3000/deleteimage", {body: { pictureID }}).pipe(
			tap(() => this.clearCache())
		)
	}

	private clearCache() {
		this.cacheData.splice(0)
	}
}