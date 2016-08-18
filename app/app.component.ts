import { Component } from '@angular/core';
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/categories">Categories</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Item catalog';
}