import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ListObjectsV2CommandOutput } from "@aws-sdk/client-s3";
import { Observable } from "rxjs";

@Injectable({
    providedIn : "root"
})
export class CarrosService {
    constructor(private http: HttpClient) {}

    public retornaCarros(): Observable<ListObjectsV2CommandOutput> {
        return this.http.get<ListObjectsV2CommandOutput>("http://localhost:3000/getimages")
    }
}