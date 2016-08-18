import { Component, Input } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'my-item-detail',
  template:`
  <div>
    <h2>{{item.name}} info!</h2>
    <div><label>id: </label>{{item.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="item.name" placeholder="name"/>
    </div>
  </div>
  `
})
export class ItemDetailComponent {
   @Input()
  item: Item;
}