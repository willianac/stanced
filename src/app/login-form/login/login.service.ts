import { Injectable } from "@angular/core";
import { UserInterface } from "./IUser";

@Injectable({providedIn : "root"})
export class LoginService {
    todosUsuarios: UserInterface[] = []

    salvarUsuario(usuario: UserInterface) {
        this.todosUsuarios.push(usuario)
    }

    listarUsuarios(): UserInterface[] {
        return this.todosUsuarios
    }
}