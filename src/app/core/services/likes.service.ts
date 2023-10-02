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

  public sendLike(photoid: number): Observable<void> {
    const userid = this.token.getDecodedToken().id;
    return this.http.post<void>(environment.apiUrl + "/like", { userid, photoid })
  }

  public removeLike(photoid: number): Observable<void> {
    const userid = this.token.getDecodedToken().id
    return this.http.delete<void>(environment.apiUrl + "/like", {body: { photoid, userid }})
  }

  public getLikes(): Observable<PhotoIdAndLikeCount> {
    return this.http.get<PhotoIdAndLikeCount>(environment.apiUrl + "/like")
  }
}