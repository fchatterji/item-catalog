import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import { Category } from './category';
import { CategoryService } from './category.service';

@Component({
  selector: 'my-categories',
  templateUrl: 'templates/categories.component.html',
  styleUrls:  ['styles/categories.component.css'],
})

export class CategoriesComponent implements OnInit {
  /* Main component, displays a list of categories and associated items */
  
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
    // When a user clicks on a category, it is highlighted
    if (this.selectedCategory === category) {
      this.selectedCategory = null;
    } else {
      this.selectedCategory = category; 
    }
  }

  add(name: string): void {
    // add a category to the list and call the service to create it in the database
    name = name.trim();
    if (!name) { return; }
    this.categoryService.create(name)
      .then(item => {
        this.categories.push(item);
        this.selectedCategory = null;
      });
  }

  addItem() {
    this.router.navigate(['/item']);
  }

  delete(category: Category): void {
    // delete a category to the list and call the service to delete it in the database
    this.categoryService
        .delete(category.id)
        .then(() => {
          this.categories = this.categories.filter(c => c !== category);
          if (this.selectedCategory === category) { this.selectedCategory = null; }
        });
  }

}