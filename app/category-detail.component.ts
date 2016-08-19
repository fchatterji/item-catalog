import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from './category.service';
import { ItemService }  from './item.service';

import { Category } from './category';
import { Item } from './item';


@Component({
  selector: 'my-category-detail',
  template:`
  <div *ngIf="category">
    <h2>{{category.name}} details</h2>
	  <ul class="items">
	    <li *ngFor="let item of category.items">
        <button (click)="gotoDetail(item)">{{ item.name }} / {{ item.category_id }}</button>
	    </li>
    </ul>
  </div>

  <div *ngIf="!category">
    <li *ngFor="let item of items" >
      <button (click)="gotoDetail(item)">{{ item.name }} / {{ item.category_id }}</button>
    </li>
  </div>
  `
})
export class CategoryDetailComponent implements OnInit {
  @Input()
  category: Category;
  items: Item[];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private itemService: ItemService) { }

  gotoDetail(item) {
    this.router.navigate(['/item', item.id]);
  }

  getItems() {
    this.items = this.itemService.getItems()
  }

  ngOnInit() {
    this.getItems();
  }
}