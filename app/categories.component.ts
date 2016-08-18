import { Component } from '@angular/core';
import { Category } from './category';
import { CategoryService } from './category.service';
import { OnInit } from '@angular/core';


@Component({
  selector: 'my-categories',
  template:`
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
`],
providers: [CategoryService]

})

export class CategoriesComponent implements OnInit {

  categories: Category[];
  selectedCategory: Category;

  constructor(private categoryService: CategoryService) { }

  getCategories() {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  ngOnInit() {
    this.getCategories();
  }

  onSelect(category: Category) { this.selectedCategory = category; }
}