import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from './category.service';
import { ItemService }  from './item.service';

import { Category } from './category';
import { Item } from './item';


@Component({
  selector: 'my-category-detail',
  templateUrl:'templates/category-detail.component.html',
  styleUrls: ['css/category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  // Detail of a category

  @Input()
  category: Category;
  items: Item[];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private itemService: ItemService) { }

  gotoDetail(item) {
    // Navigate to the detail page of an item
    this.router.navigate(['/item', item.id]);
  }

  getItems() {
    // Get all the items of this category
    this.itemService.getItemsByCategory(this.category.id)
                    .then(items => this.items = items);  
  }

  ngOnChanges() {
    this.getItems();
  }

  ngOnInit() {
    this.getItems();
  }
}