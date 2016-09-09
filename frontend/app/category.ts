import { Item } from './item';

export class Category {
  // Model of the category class, corresponds to the model defined in the backend
  id: number;
  name: string;
  items: Item[];
}