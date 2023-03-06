import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RobotsService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({"Content-Type" : "application/json"})
}

  public catchOneRobot(): any {
    
  }
}
