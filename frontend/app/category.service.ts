import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './category';

@Injectable()
export class CategoryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private categoriesUrl = 'http://localhost:8000/categories.json';  // URL to backend API
  private categoryUrl = 'http://localhost:8000/category';  // URL to backend API

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {
    // Get a list of categories from the database

    return this.http.get(this.categoriesUrl)
               .toPromise()
               .then(response => response.json() as Category[])
               .catch(this.handleError);
  }

  getCategory(id: number): Promise<Category> {
    // Get a signle category from the database, through it's id
    return this.getCategories()
               .then(categories => categories.find(category => category.id === id));       
  }

  create(name: string): Promise<Category> {
    // Create a category in the database
    return this.http
      .post(this.categoriesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    // Delete a category from the database

    let url = `${this.categoryUrl}/${id}.json`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // Very simple error handling function
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}