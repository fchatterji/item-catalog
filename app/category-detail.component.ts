import { Component, Input } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'my-category-detail',
  template:`
  <div *ngIf="category">
    <h2>{{category.name}} details!</h2>
    <div><label>id: </label>{{category.id}}</div>
    <div>
      <label>name: </label>
      {{category.name}}
    </div>
  <ul class="items">
    <li *ngFor="let item of category.items">
      <my-item-detail [item]=item></my-item-detail>
  </ul>
  </div>
  `
})
export class CategoryDetailComponent {
  @Input()
  category: Category;
}