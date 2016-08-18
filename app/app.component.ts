import { Component } from '@angular/core';
import { Item } from './item';
import { Category } from './category';

const item1: Item = {
id: 1,
name: 'Windstorm',
description: 'a storm of winds'
};

const item2: Item = {
id: 2,
name: 'wristband',
description: 'a band of wrists'
};

const item3: Item = {
id: 3,
name: 'dog',
description: 'barks'
};

const item4: Item = {
id: 4,
name: 'cat',
description: 'tries to bark'
};

const items1: Item[] = [item1, item2];
const items2: Item[] = [item3, item4];


const category1: Category = {
id: 1,
name: 'tools',
items: items1
};

const category2: Category = {
id: 1,
name: 'animals',
items: items2
};

const categories1: Category[] = [category1, category2];

@Component({
  selector: 'my-app',
  template:`
  <h1>{{title}}</h1>

  <h2>My categories</h2>
  <ul class="categories">
    <li *ngFor="let category of categories" 
        [class.selected]="category === selectedCategory"
        (click)="onSelect(category)">
      <span class="badge">{{category.id}}</span> {{category.name}}
  </ul>

  <my-category-detail [category]="selectedCategory"></my-category-detail>
  `,
  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .categories {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .categories li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .categories li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .categories li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .categories .text {
    position: relative;
    top: -3px;
  }
  .categories .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`]

})

export class AppComponent {

  title = 'Item catalog';

  categories = categories1;

  selectedCategory: Category;

  onSelect(category: Category) { this.selectedCategory = category; }
}