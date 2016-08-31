import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'my-categories',
  templateUrl: 'app/categories.component.html',
  styleUrls:  ['app/categories.component.css'],
})

export class CategoriesComponent implements OnInit {
  categories: Category[];
  selectedCategory: Category;

  constructor(
    private router: Router,
    private categoryService: CategoryService) { }

  getCategories() {
    this.categoryService.getCategories().then(categories => this.categories = categories);
  }

  ngOnInit() {
    this.getCategories();
  }

  onSelect(category: Category) { 
    if (this.selectedCategory === category) {
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category; 
    }
  }

}