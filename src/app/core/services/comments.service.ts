import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "../authentication/token.service";
import { Observable } from "rxjs";
import { IComment } from "src/app/shared/models/Comment";

import { environment } from "src/environments/environment.development";

@Injectable({
	providedIn: "root"
})
export class CommentsService {

	constructor(private http: HttpClient, private token: TokenService) { }

	public send(comment: string, picture_id: string): Observable<void> {
		const author_id = this.token.getDecodedToken().id

		return this.http.post<void>(environment.apiUrl + "/sendcomment", {
			comment,
			author_id,
			picture_id
		})
	}

	public getComments(id:string): Observable<IComment[]> {
		const headers = new HttpHeaders({id})
		return this.http.get<IComment[]>(environment.apiUrl + "/getcomments", {headers : headers})
	}
}
