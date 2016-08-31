import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { routing }       from './app.routing';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }            from './app.component';
import { CategoriesComponent }     from './categories.component';
import { CategoryDetailComponent } from './category-detail.component';
import { ItemDetailComponent }     from './item-detail.component';

import { CategoryService }  from './category.service';
import { ItemService }      from './item.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    HttpModule
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