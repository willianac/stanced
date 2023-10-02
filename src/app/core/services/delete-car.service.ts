import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { PicturesService } from "./pictures.service";
import { Observable, tap } from "rxjs";

@Injectable({
	providedIn: "root"
})
export class DeletePictureService {

	constructor(private http: HttpClient, private cs: PicturesService) {}

	public delete(pictureID: string): Observable<any> {
		return this.http.delete<any>("http://localhost:3000/deleteimage", {body: { pictureID }}).pipe(
			tap(() => this.cs.clearCache())
		)
	}
}