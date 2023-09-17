import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CarrosService } from "./carros.service";
import { Observable, tap } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class DeleteCarService {

  constructor(private http: HttpClient, private cs: CarrosService) {}

  public delete(carID: string): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/deleteimage", {body: { carID }}).pipe(
      tap(() => this.cs.clearCache())
    )
  }
}