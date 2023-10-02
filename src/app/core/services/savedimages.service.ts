import { Injectable } from '@angular/core';
import { TokenService } from '../authentication/token.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { IPicture } from 'src/app/shared/models/Picture';

import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: "root"
})
export class SavedImagesService {
  userSavedImages = new BehaviorSubject<IPicture[]>([]);

  constructor(private tokenService: TokenService, private http: HttpClient) {}

  public saveImage(photoid: string): Observable<void> {
    const userid = this.tokenService.getDecodedToken().id
    return this.http.post<void>(environment.apiUrl + "/saveusersavedimage", { userid, photoid })
  }

  public getUserSavedImage(): Observable<IPicture[]> {
    const userid = this.tokenService.getDecodedToken().id
    return this.http.get<IPicture[]>(environment.apiUrl + "/getusersavedimages?id=" + userid).pipe(
      tap(pictures => this.userSavedImages.next(pictures))
    )
  }

  public removeSavedImage(photoid: string): Observable<any> {
    const userid = this.tokenService.getDecodedToken().id
    return this.http.delete<void>(environment.apiUrl + "/removesaved", { body: { userid, photoid } }).pipe(
      switchMap(() => this.getUserSavedImage()),
      tap(images => this.userSavedImages.next(images))
    )
  }

  public returnSavedImages(): Observable<IPicture[]> {
    return this.userSavedImages.asObservable()
  }
}