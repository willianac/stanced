import { Injectable } from '@angular/core';
import { CanMatch, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../authentication/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanMatch {

  constructor(private router: Router, private token: TokenService) {}

  canMatch(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.token.hasToken()) {
      this.router.navigateByUrl("home")
      return false;
    }
    return true
  }
}
