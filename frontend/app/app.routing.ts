import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { ItemDetailComponent } from './item-detail.component';

import { AuthGuard } from './auth.guard.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full',
    canActivate: [AuthGuard]
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
  path: 'item',
  component: ItemDetailComponent,
  canActivate: [AuthGuard]
  },
  {
  path: 'item/:id',
  component: ItemDetailComponent,
  canActivate: [AuthGuard]
  },
];
export const routing = RouterModule.forRoot(appRoutes);