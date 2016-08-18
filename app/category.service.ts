import { Injectable } from '@angular/core';

import { CATEGORIES} from './mock-categories';

@Injectable()
export class CategoryService {
  getCategories() {
  	return Promise.resolve(CATEGORIES);
  }
}