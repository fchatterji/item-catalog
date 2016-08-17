import { Component } from '@angular/core';

export class Item {
  id: number;
  name: string;
  description: string;
}

export class Category {
  id: number;
  name: string;
}


@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>

  <h2>{{item.name}} details!</h2>
  <div><label>id: </label>{{item.id}}</div>
  <input [(ngModel)]="item.name" placeholder="name">
  <div><label>description: </label>{{item.description}}</div>

  <h2>{{category.name}} details!</h2>
  <div><label>id: </label>{{category.id}}</div>
  <div><label>name: </label>{{category.name}}</div>
  `
})

export class AppComponent {

  title = 'Item catalog';

  item: Item = {
  id: 1,
  name: 'Windstorm',
  description: 'a storm of wind'
  };

  category: Category = {
  id: 1,
  name: 'tools'
  };
}