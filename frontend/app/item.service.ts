import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private itemsUrl = 'http://localhost:8000/items';  // URL to web api
  private itemUrl = 'http://localhost:8000/item';  // URL to web api

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    return this.http.get(`${this.itemsUrl}.json`)
               .toPromise()
               .then(response => response.json() as Item[])
               .catch(this.handleError);
  }

  getItem(id: number): Promise<Item> {
  	return this.getItems()
  	           .then(items => items.find(item => item.id === id));       
  }

  getItemsByCategory(category: number): Promise<Item[]> {
    return this.getItems()
               .then(items => items.filter(item => item.category === category));       
  }

  update(item: Item): Promise<Item> {
    const url = `${this.itemUrl}/${item.id}.json`;
    return this.http
      .put(url, JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  create(item: Item): Promise<Item> {
    const url = `${this.itemsUrl}/`;
    return this.http
      .post(url, JSON.stringify(item), {headers: this.headers})
      .toPromise()
      .then(() => item)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {

    let url = `${this.itemUrl}/${id}.json`;
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