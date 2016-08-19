import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CategoryService }  from './category.service';
import { ItemService }  from './item.service';

import { Item } from './item';

@Component({
  selector: 'my-item-detail',
  template:`
  <div>
    <h2>{{item.name}}</h2>

    <div>
      <label>name: </label>
      {{ item.name }}
    </div>

    <div>
      <label>description: </label>
      {{ item.description }}
    </div>
    
    <button (click)="gotoCategories()">Back</button>

  </div>
  `
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