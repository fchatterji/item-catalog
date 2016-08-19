import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CategoryService } from './category.service';
import { ItemService }  from './item.service';

import { Category } from './category';
import { Item } from './item';


@Component({
  selector: 'my-category-detail',
  templateUrl:'app/category-detail.component.html',
  styleUrls: ['app/category-detail.component.css'],
})
export class CategoryDetailComponent implements OnInit {
  @Input()
  category: Category;
  items: Item[];

  constructor(
    private router: Router,
    private categoryService: CategoryService,
    private itemService: ItemService) { }

  gotoDetail(item) {
    this.router.navigate(['/item', item.id]);
  }

  getItems() {
    this.items = this.itemService.getItems()
  }

  ngOnInit() {
    this.getItems();
  }

  onSelect(item: Item) { 
    this.router.navigate(['/hero', hero.id]);
}