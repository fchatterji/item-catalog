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
  item_exists: boolean;

  constructor(
    private itemService: ItemService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategories();

    this.route.params.forEach((params: Params) => {
      let id = +params['id'];

      if (isNaN(id)) {
        this.item_exists = false;
      }

      else {

        this.item_exists = true;
        this.itemService.getItem(id)
                        .then(item => this.item = item);
        console.log(this.item);
      }

    });

  }

  goBack(): void {
    window.history.back();
  }

  getCategories() {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  submit(item: Item) {
     console.log(item);

    if (this.item_exists === true) {
      console.log(this.item)
      this.itemService.update(this.item)
                      .then(this.goBack);
    } 

    else {
      this.item = item;
      this.itemService.create(this.item)
                      .then(this.goBack);
    }
  }
}



