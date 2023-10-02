import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "../authentication/token.service";
import { Observable } from "rxjs";
import { IComment } from "src/app/shared/models/Comment";

@Injectable({
	providedIn: "root"
})
export class CommentsService {

	constructor(private http: HttpClient, private token: TokenService) { }

	public send(comment: string, pictureID: number): Observable<any> {
		const { name } = this.token.getDecodedToken()

		return this.http.post("http://localhost:3000/sendcomment", {
			comment,
			name,
			photoid : pictureID
		})
	}

	public getComments(id:string): Observable<IComment[]> {
		const headers = new HttpHeaders({id})
		return this.http.get<IComment[]>("http://localhost:3000/getcomments", {headers : headers})
	}
}
