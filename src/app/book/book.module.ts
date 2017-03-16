import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list/book-list.component';

import { BookRoutes } from './book.routing';

@NgModule({
  imports: [
    CommonModule,
    BookRoutes
  ],
  declarations: [
    BookListComponent
  ]
})
export class BookModule { }
