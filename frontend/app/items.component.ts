import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'my-items',
  templateUrl: 'templates/items.component.html',
  styleUrls:  ['css/items.component.css'],
})

export class ItemsComponent implements OnInit {
  // Component linked to a list of all items

  items: Item[];

  constructor(
    private router: Router,
    private itemService: ItemService) { }

  getItems() {
    // Get all items from the item service
    this.itemService.getItems().then(items => this.items = items);
  }

  ngOnInit() {
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