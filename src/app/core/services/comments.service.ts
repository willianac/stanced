import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { TokenService } from "../authentication/token.service";
import { BehaviorSubject, Observable, concatMap, tap } from "rxjs";
import { IComment } from "src/app/shared/models/Comment";

import { environment } from "src/environments/environment.development";

@Injectable({
	providedIn: "root"
})
export class CommentsService {
	private comments = new BehaviorSubject<IComment[]>([])

	constructor(private http: HttpClient, private token: TokenService) {}

	public send(comment: string, picture_id: string): Observable<IComment[]> {
		const author_id = this.token.getDecodedToken().id

		return this.http.post(environment.apiUrl + "/sendcomment", {
			comment,
			author_id,
			picture_id
		}).pipe(
			concatMap(() => this.getComments(picture_id)),
			tap((comments) => this.comments.next(comments))
		)
	}

	public getComments(id:string): Observable<IComment[]> {
		const headers = new HttpHeaders({id})
		return this.http.get<IComment[]>(environment.apiUrl + "/getcomments", {headers : headers}).pipe(
			tap((comments) => this.comments.next(comments))
		)
	}

	public remove(id: string): Observable<void> {
		return this.http.delete<void>(environment.apiUrl + "/removecomment", { body: { id } })
	}

	public edit(id: string, comment: string): Observable<void> {
		return this.http.put<void>(environment.apiUrl + "/comment", { id, comment })
	}

	public returnCommentsAsObservable() {
		return this.comments.asObservable()
	}
}
