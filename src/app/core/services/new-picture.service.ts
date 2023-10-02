import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { TokenService } from "../authentication/token.service";
import { PicturesService } from "./pictures.service";

@Injectable({
	providedIn : "root"
})
export default class NewPictureService {
	constructor(private http: HttpClient, private token: TokenService, private PicturesService: PicturesService) {}

	public sendNewPicture(newcar: FormData): Observable<any>{
		const token = this.token.getDecodedToken()
		newcar.append("userid", token.id.toString())
		return this.http.post<any>("http://localhost:3000/sendimage", newcar).pipe(
			tap(() => this.PicturesService.clearCache())
		)
	}
}