import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { ItemDetailComponent } from './item-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
  path: 'item',
  component: ItemDetailComponent
  },
  {
  path: 'item/:id',
  component: ItemDetailComponent
  },
];
export const routing = RouterModule.forRoot(appRoutes);