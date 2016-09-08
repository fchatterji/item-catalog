import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'my-items',
  templateUrl: 'templates/items.component.html',
  styleUrls:  ['styles/items.component.css'],
})

export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(
    private router: Router,
    private itemService: ItemService) { }

  getItems() {
    this.itemService.getItems().then(items => this.items = items);
  }

  ngOnInit() {
    this.getItems();
  }

  gotoDetail(item) {
    this.router.navigate(['/item', item.id]);
  }

  delete(item: Item): void {
    this.itemService
        .delete(item.id)
        .then(() => {
          this.items = this.items.filter(i => i !== item);
        });
  }
}