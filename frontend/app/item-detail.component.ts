import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CategoryService }  from './category.service';
import { ItemService }  from './item.service';

import { Item } from './item';
import { Category } from './category';

@Component({
  selector: 'my-item-detail',
  templateUrl: 'app/item-detail.component.html',
  styleUrls: ['app/item-detail.component.css'],
})
export class ItemDetailComponent implements OnInit{

  item: Item;
  categories: Category[];

  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategories();

    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
        this.itemService.getItem(id)
                        .then(item => this.item = item);
    });

  }

  goBack(): void {
    window.history.back();
  }

  getCategories() {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  submit(item: Item) {

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



