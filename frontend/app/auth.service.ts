import { Injectable } from '@angular/core';

// WARNING: Those imports will normally not be used and should be deleted.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

// The login html includes a login button which creates a gapi variable
// that's used to do the login/logout. It has to be declared here to 
// be also available in this scope
declare var gapi:any;

@Injectable()
export class AuthService {
	isLoggedIn = true;
  /* Service used by the authguard class to check if a user is logged in */
 
  /*auth2 = gapi.auth2.getAuthInstance();
  isLoggedIn = this.auth2.isSignedIn.get();

  login() {
    return Observable.of(true).delay(10).do(val => this.isLoggedIn = true);
  }

  logout() {
    this.isLoggedIn = false;
  }
  */
}