import { Component } from '@angular/core';

// declare gapi and auth2 google api variables here so that they are available 
// in this scope
declare var gapi: any;
declare var auth2: any;

@Component({
  selector: 'my-app',
  templateUrl: 'templates/app.component.html',
  styleUrls: ['css/app.component.css'],
})
export class AppComponent { 
    signOut() {
    // Logs the user out, using google api
    auth2.signOut().then(function() {
      console.log('User signed out.');
    });
  }

}