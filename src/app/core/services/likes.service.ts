import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../authentication/token.service";

import { environment } from "src/environments/environment.development";

type PhotoIdAndLikeCount = {
  [key: string]: number
}

@Injectable({
	providedIn: "root"
})
export class LikesService {
	constructor(private http: HttpClient, private token: TokenService) {}

	public sendLike(picture_id: string): Observable<void> {
		const user_id = this.token.getDecodedToken().id;
		return this.http.post<void>(environment.apiUrl + "/like", { user_id, picture_id })
	}

	public removeLike(picture_id: string): Observable<void> {
		const user_id = this.token.getDecodedToken().id
		return this.http.delete<void>(environment.apiUrl + "/like", {body: { picture_id, user_id }})
	}

	public getLikes(): Observable<PhotoIdAndLikeCount> {
		return this.http.get<PhotoIdAndLikeCount>(environment.apiUrl + "/like")
	}
}