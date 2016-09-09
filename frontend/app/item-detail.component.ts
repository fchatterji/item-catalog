import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CategoryService }  from './category.service';
import { ItemService }  from './item.service';

import { Item } from './item';
import { Category } from './category';

@Component({
  selector: 'my-item-detail',
  templateUrl: 'templates/item-detail.component.html',
  styleUrls: ['css/item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit{
  // Component linked to a form that allows the user to view the detail
  // of an item, create and edit them.

  item: Item;
  categories: Category[];

  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // Get categories so that when the user creates a new item,
    // he can choose it's categories from the list of all categories
    this.getCategories();

    // Get the item from the database. The id of the item is in the url
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
        this.itemService.getItem(id)
                        .then(item => this.item = item);
    });
  }

  goBack(): void {
    // Return to previous visited page
    window.history.back();
  }

  getCategories() {
    // Get all categories from the category service
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  submit(item: Item) {
    // On form submit, create or update the item

    if (this.item === undefined) {
      this.item = item;
      this.itemService.create(this.item)
                      .then(this.goBack);
    } 

    else {
      this.itemService.update(this.item)
                      .then(this.goBack);
    }
  }
}



