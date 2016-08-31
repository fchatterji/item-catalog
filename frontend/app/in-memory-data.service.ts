import { InMemoryDbService } from 'angular2-in-memory-web-api';

import { Item } from './item';
import { Category } from './category';

const item1: Item = {
id: 1,
name: 'Windstorm',
description: 'a storm of winds',
category_id: 1
};

const item2: Item = {
id: 2,
name: 'wristband',
description: 'a band of wrists',
category_id: 1
};

const item3: Item = {
id: 3,
name: 'dog',
description: 'barks',
category_id: 2
};

const item4: Item = {
id: 4,
name: 'cat',
description: 'tries to bark',
category_id: 2
};

const items1: Item[] = [item1, item2];
const items2: Item[] = [item3, item4];


const category1: Category = {
id: 1,
name: 'tools',
items: items1
};

const category2: Category = {
id: 2,
name: 'animals',
items: items2
};

const CATEGORIES: Category[] = [category1, category2];
const ITEMS: Item[] = [item1, item2, item3, item4];
const ITEM: Item = item2;

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let categories = CATEGORIES;
    return {categories};
  }
}