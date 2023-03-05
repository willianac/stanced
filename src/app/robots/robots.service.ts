import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor(private http: HttpClient) { }

  public catchOneRobot(): Observable<Object[]> {
    return this.http.get<Object[]>("http://localhost:3000/carros")
  }
}
