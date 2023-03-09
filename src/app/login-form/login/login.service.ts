import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { UserInterface } from "./IUser";

@Injectable({providedIn : "root"})
export class LoginService {
    todosUsuarios: UserInterface[] = []

    constructor(private http: HttpClient) {}

    salvarUsuario(usuario: UserInterface) {
        return this.http.post("http://localhost:3000/login", usuario, {responseType : "text"})
    }

    listarUsuarios(): UserInterface[] {
        return this.todosUsuarios
    }
}