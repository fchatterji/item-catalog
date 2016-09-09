import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private itemsUrl = 'http://localhost:8000/items';  // URL to backend
  private itemUrl = 'http://localhost:8000/item';  // URL to backend

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    // Return a list of all items from the database

    return this.http.get(`${this.itemsUrl}.json`)
               .toPromise()
               .then(response => response.json() as Item[])
               .catch(this.handleError);
  }

  getItem(id: number): Promise<Item> {
    // Return a single item from the database, using an id

  	return this.getItems()
  	           .then(items => items.find(item => item.id === id));       
  }

  getItemsByCategory(category: number): Promise<Item[]> {
    // Return a list of items from the database, using a category

    return this.getItems()
               .then(items => items.filter(item => item.category === category));       
  }

  update(item: Item): Promise<Item> {
    // Update an item

    const url = `${this.itemUrl}/${item.id}.json`;
    return this.http
      .put(url, JSON.stringify(item), {headers: this.headers}) // send a post request to the backend
      .toPromise() // angular returns an observable, here converted to a promise. Observable have 
      // more features but promises are easier to use. 
      .then(() => item)
      .catch(this.handleError);
  }

  create(item: Item): Promise<Item> {
    // Create an item

    const url = `${this.itemsUrl}/`;
    return this.http
      .post(url, JSON.stringify(item), {headers: this.headers}) // send a put request to the backend
      .toPromise() // angular returns an observable, here converted to a promise. Observable have 
      // more features but promises are easier to use.
      .then(() => item)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    // Delete an item

    let url = `${this.itemUrl}/${id}.json`;
    return this.http.delete(url) // send a delete request to the backend
      .toPromise() // angular returns an observable, here converted to a promise. Observable have 
      // more features but promises are easier to use.
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    // very simple error handling function
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}