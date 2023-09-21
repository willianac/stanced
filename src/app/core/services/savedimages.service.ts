import { Injectable } from '@angular/core';
import { TokenService } from '../authentication/token.service';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, switchMap, tap } from 'rxjs';
import { ICarPicture } from 'src/app/shared/models/carro';

@Injectable({
  providedIn: "root"
})
export class SavedImagesService {
  userSavedImages = new BehaviorSubject<ICarPicture[]>([]);

  constructor(private tokenService: TokenService, private http: HttpClient) {}

  public saveImage(photoid: string): Observable<void> {
    const userid = this.tokenService.getDecodedToken().id
    return this.http.post<void>("http://localhost:3000/saveusersavedimage", { userid, photoid })
  }

  public getUserSavedImage(): Observable<ICarPicture[]> {
    const userid = this.tokenService.getDecodedToken().id
    return this.http.get<ICarPicture[]>("http://localhost:3000/getusersavedimages?id=" + userid).pipe(
      tap(cars => this.userSavedImages.next(cars))
    )
  }

  public removeSavedImage(photoid: string): Observable<any> {
    const userid = this.tokenService.getDecodedToken().id
    return this.http.delete<void>("http://localhost:3000/removesaved", { body: { userid, photoid } }).pipe(
      switchMap(() => this.getUserSavedImage()),
      tap(images => this.userSavedImages.next(images))
    )
  }

  public returnSavedImages(): Observable<ICarPicture[]> {
    return this.userSavedImages.asObservable()
  }
}