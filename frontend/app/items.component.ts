import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Item } from './item';
import { ItemService } from './item.service';

@Component({
  selector: 'my-items',
  templateUrl: 'app/items.component.html',
  styleUrls:  ['app/items.component.css'],
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

}