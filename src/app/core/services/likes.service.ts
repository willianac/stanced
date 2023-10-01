import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../authentication/token.service";

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
    return this.http.post<void>("http://localhost:3000/like", { userid, photoid })
  }

  public removeLike(photoid: number): Observable<void> {
    const userid = this.token.getDecodedToken().id
    return this.http.delete<void>("http://localhost:3000/like", {body: { photoid, userid }})
  }

  public getLikes(): Observable<PhotoIdAndLikeCount> {
    return this.http.get<PhotoIdAndLikeCount>("http://localhost:3000/like")
  }
}