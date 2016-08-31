import { Injectable } from '@angular/core';

import { Item } from './item';

import { ITEMS, ITEM} from './mock-categories';

@Injectable()
export class ItemService {

  getItems() {
  	return ITEMS
  }
  
  getItem(id: number) {
    return ITEM
  }


}