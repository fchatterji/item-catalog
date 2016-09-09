import { Component, NgZone } from '@angular/core';
import { Router }    from '@angular/router';
import { AuthService } from './auth.service';

// declare gapi and auth2 google api variables here so that they are available 
// in this scope
declare var gapi:any;
declare var auth2:any;

@Component({
    selector: "login",
    templateUrl: "templates/login.component.html",
    styleUrls:  ['css/login.component.css'],
})
export class LoginComponent {
  // Component tied to a login and a signout button. Login and signout use google signin

  googleLoginButtonId = "google-login-button";
  redirectUrl: string;

  // NgZone: used for executing work inside or outside of the Angular zone.
  // Necessary to work with google signin
  constructor(private _zone: NgZone, private authService: AuthService, private router: Router) { }

  // Angular hook that allows for interaction with elements inserted after the
  // rendering of a view
  ngAfterViewInit() {
    
    // Converts the Google login button stub to an actual button.
    gapi.signin2.render(
      this.googleLoginButtonId,
      { 
        "onSuccess": this.onGoogleLoginSuccess,
        "scope": "profile",
        "theme": "dark"
      });
  }

  // Triggered after a user successfully logs in using the Google external
  // login provider.
  onGoogleLoginSuccess = (loggedInUser) => {
	  this._zone.run(() => {
      let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/categories';
      this.router.navigate([redirect]);
	  });
	}

  signOut() {
    // Logs the user out, using google api
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
}