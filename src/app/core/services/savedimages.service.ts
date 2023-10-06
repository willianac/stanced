import { Injectable } from "@angular/core";
import { TokenService } from "../authentication/token.service";
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, switchMap, tap } from "rxjs";
import { IPicture } from "src/app/shared/models/Picture";

import { environment } from "src/environments/environment.development";

@Injectable({
	providedIn: "root"
})
export class SavedImagesService {
	userSavedImages = new BehaviorSubject<IPicture[]>([]);

	constructor(private tokenService: TokenService, private http: HttpClient) {}

	public saveImage(picture_id: string): Observable<void> {
		const user_id = this.tokenService.getDecodedToken().id
		return this.http.post<void>(environment.apiUrl + "/saveusersavedimage", { user_id, picture_id })
	}

	public getUserSavedImage(): Observable<IPicture[]> {
		const userid = this.tokenService.getDecodedToken().id
		return this.http.get<IPicture[]>(environment.apiUrl + "/getusersavedimages?id=" + userid).pipe(
			tap(pictures => this.userSavedImages.next(pictures))
		)
	}

	public removeSavedImage(picture_id: string): Observable<IPicture[]> {
		const user_id = this.tokenService.getDecodedToken().id
		return this.http.delete<void>(environment.apiUrl + "/removesaved", { body: { user_id, picture_id } }).pipe(
			switchMap(() => this.getUserSavedImage()),
			tap(images => this.userSavedImages.next(images))
		)
	}

	public returnSavedImages(): Observable<IPicture[]> {
		return this.userSavedImages.asObservable()
	}
}