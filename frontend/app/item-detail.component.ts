import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CategoryService }  from './category.service';
import { ItemService }  from './item.service';

import { Item } from './item';

@Component({
  selector: 'my-item-detail',
  templateUrl: 'app/item-detail.component.html',
  styleUrls: ['app/item-detail.component.css'],
})
export class ItemDetailComponent {

  @Input()
  item: Item;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.item = this.itemService.getItem(id);
    });
  }

  gotoCategories() {
    this.router.navigate(['/categories']);
  }
}