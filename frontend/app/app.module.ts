import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing }       from './app.routing';
import { HttpModule }    from '@angular/http';

import { AppComponent }            from './app.component';

import { CategoriesComponent }     from './categories.component';
import { CategoryDetailComponent } from './category-detail.component';

import { ItemsComponent }     from './items.component';
import { ItemFormComponent }     from './item-form.component';

import { LoginComponent } from './login.component';

import { CategoryService }  from './category.service';
import { ItemService }      from './item.service';
import { AuthGuard } from './auth.guard.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ItemFormComponent,
    ItemsComponent,
    LoginComponent
  ],
  providers: [
    CategoryService,
    ItemService,
    AuthGuard,
    AuthService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }