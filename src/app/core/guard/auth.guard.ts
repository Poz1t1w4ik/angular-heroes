import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { MainService } from '../service/main.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private mainService: MainService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const token = this.mainService.getLocalData('token');

    if (token === 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9') {
      return true;
    } else {
      this.router.navigate(['/authorization']).then(() => {});
      return false;
    }
  }

}
