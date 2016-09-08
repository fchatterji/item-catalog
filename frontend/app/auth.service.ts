import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

// Google's login API namespace
declare var gapi:any;

@Injectable()
export class AuthService {

  auth2 = gapi.auth2.getAuthInstance();
  isLoggedIn = this.auth2.isSignedIn.get();



  login() {
    return Observable.of(true).delay(10).do(val => this.isLoggedIn = true);
  }

  logout() {
    this.isLoggedIn = false;
  }
}