import { Injectable } from '@angular/core';

declare var gapi:any;
declare var auth2:any;

@Injectable()
export class AuthService {

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  getIsLoggedIn() {
    return auth2.isSignedIn.get();
  }
}