import { Routes, RouterModule } from '@angular/router';

import { CategoriesComponent } from './categories.component';
import { ItemFormComponent } from './item-form.component';
import { LoginComponent } from './login.component';

import { AuthGuard } from './auth.guard.service';

const appRoutes: Routes = [
  // Defines the urls of the app, 
  // the components associated with them
  // and the component responsible for permissions (auth guard)
  {
    path: '',
    redirectTo: '/categories',
    pathMatch: 'full', //When making a redirect it is important to tell the 
    //router how to match the URL. There are two options for that - full or 
    //prefix. full matches the URL as it is while prefix matches URL prefixed 
    //with the redirect path.
    canActivate: [AuthGuard] 
  },
  {
    path: 'categories',
    component: CategoriesComponent,
    canActivate: [AuthGuard]
  },
  {
  path: 'item',
  component: ItemFormComponent,
  canActivate: [AuthGuard]
  },
  {
  path: 'item/:id',
  component: ItemFormComponent,
  canActivate: [AuthGuard]
  },
  {
  path: 'login',
  component: LoginComponent,
  },
];
export const routing = RouterModule.forRoot(appRoutes);