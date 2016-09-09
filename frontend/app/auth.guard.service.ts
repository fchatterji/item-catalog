import { Injectable }     from '@angular/core';
import { CanActivate }    from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  /* Class responsible for defining if a user can or cannot activate pages
  Uses the service AuthService */

  constructor(private authService: AuthService) {}

  canActivate() {
    /* return true if the user is logged in and can therefore
    activate the page, false if not */
    console.log('AuthGuard#canActivate called');
    return this.authService.isLoggedIn;
  }
}