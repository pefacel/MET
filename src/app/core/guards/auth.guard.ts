import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private logged: boolean;

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    this.authenticationService.currentUSer().then(resp => {
      console.log('resp guard', resp);
      if (resp != null) {
        console.log('guard pass!!');
        this.logged = true;
        this.router.navigate(['user/details']);

      } else {
        this.logged = false;
        window.alert('Ruta protegida');
        this.router.navigate(['user/register']);
      }
    }).catch(error => {
      console.log('error guard canActivate-->', error);
      this.logged = false;
      window.alert('Ruta protegida');
      return this.logged;
    })
    return this.logged;
  }

}
