import { Injectable } from '@angular/core';

import { Item } from './item';

import { ITEMS, ITEM} from './mock-categories';

@Injectable()
export class ItemService {
  getItem(id: number) {
    return ITEM
  }

  getItems() {
  	return ITEMS
  }
}