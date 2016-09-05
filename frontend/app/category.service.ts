import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Category } from './category';

@Injectable()
export class CategoryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private categoriesUrl = 'http://localhost:8000/categories.json';  // URL to web api
  private categoryUrl = 'http://localhost:8000/category';  // URL to web api

  constructor(private http: Http) { }

  getCategories(): Promise<Category[]> {

    return this.http.get(this.categoriesUrl)
               .toPromise()
               .then(response => response.json() as Category[])
               .catch(this.handleError);
  }


  create(name: string): Promise<Category> {
    return this.http
      .post(this.categoriesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {

    let url = `${this.categoryUrl}/${id}.json`;
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
}