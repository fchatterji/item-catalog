import { ITEMS, ITEM} from './mock-categories';


import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {
  private itemsUrl = 'http://localhost:8000/items.json';  // URL to web api

  constructor(private http: Http) { }

  getItems(): Promise<Item[]> {
    return this.http.get(this.itemsUrl)
               .toPromise()
               .then(response => response.json() as Item[])
               .catch(this.handleError);
  }

  getItem(id: number): Promise<Item> {
  	return this.getItems()
  	           .then(items => items.find(item => item.id === id));       
  }

  private handleError(error: any): Promise<any> {
  console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
  }
}