import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing }       from './app.routing';

import { AppComponent }  from './app.component';
import { CategoriesComponent }  from './categories.component';
import { CategoryService }  from './category.service';
import { ItemService }  from './item.service';


import { CategoryDetailComponent } from './category-detail.component';
import { ItemDetailComponent } from './item-detail.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryDetailComponent,
    ItemDetailComponent
  ],
  providers: [
    CategoryService,
    ItemService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }