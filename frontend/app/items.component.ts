import { Component, Input, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'my-items',
  templateUrl: 'templates/items.component.html',
  styleUrls: ['css/items.component.css'],
})

export class ItemsComponent implements OnInit {
  // Component linked to a list of all items

  @Input()
  category: Category;
  items: Item[];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private itemService: ItemService) { }

  getItems() {

    if (this.category === undefined) {
    // Get all items from the item service
    this.itemService.getItems().then(items => this.items = items);      
    }
    else {
    // Get all the items of this category
    this.itemService.getItemsByCategory(this.category.id)
      .then(items => this.items = items);      
    }
  }

  ngOnInit() {
    this.getItems();
  }

  ngOnChanges() {
    this.getItems();
  }

  gotoDetail(item) {
    // Navigate to the detail page of an item
    this.router.navigate(['/item', item.id]);
  }

  delete(item: Item): void {
    // call the item service to delete an item
    this.itemService
      .delete(item.id)
      .then(() => {
        this.items = this.items.filter(i => i !== item);
      });
  }
}