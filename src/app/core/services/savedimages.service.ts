import { Injectable } from '@angular/core';
import { TokenService } from '../authentication/token.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class SavedImagesService {
  constructor(private tokenService: TokenService, private http: HttpClient) {}

  public saveImage(photoid: string): Observable<void> {
    const userid = this.tokenService.getDecodedToken().id

    return this.http.post<void>("http://localhost:3000/saveusersavedimage", { userid, photoid })
  }
}