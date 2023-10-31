import { HttpClient, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, forkJoin, map, tap } from "rxjs";
import { IPicture } from "src/app/shared/models/Picture";
import { LikesService } from "./likes.service";
import { TokenService } from "../authentication/token.service";

import { environment } from "src/environments/environment.development";

@Injectable({
	providedIn : "root"
})
export class PicturesService {
	private cacheData: IPicture[] = []

	constructor(private http: HttpClient, private likesService: LikesService, private token: TokenService) {}

	public getPictures(): Observable<IPicture[]> {
		const userid = this.token.getDecodedToken().id
		const likes = this.likesService.getLikes()
		const pictures = this.http.get<IPicture[]>(environment.apiUrl + "/getimages?userid=" + userid)

		return forkJoin([likes, pictures]).pipe(
			map(([likesCount, pictures]) => {
				return pictures.map(picture => (
					{...picture, likes: likesCount[picture.id]}
				))
			})
		)
	}

	public sendNewPicture(newPicture: FormData): Observable<HttpEvent<void>>{
		const token = this.token.getDecodedToken()
		newPicture.append("userid", token.id.toString())
		return this.http.post<void>(environment.apiUrl + "/sendimage", newPicture, {
			observe: "events",
			reportProgress: true
		}).pipe(
			tap(() => this.clearCache())
		)
	}
    
	public getPicturesByUserId(id: string): Observable<IPicture[]> {
		return this.http.get<IPicture[]>(environment.apiUrl + "/getimagesbyuserid?id=" + id)
	}

	public deletePicture(picture_id: string): Observable<void> {
		return this.http.delete<void>(environment.apiUrl + "/deleteimage", {body: { picture_id }}).pipe(
			tap(() => this.clearCache())
		)
	}

	private clearCache() {
		this.cacheData.splice(0)
	}
}