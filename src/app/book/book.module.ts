import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRepository } from './book.repository';
import { BookRoutes } from './book.routing';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
  imports: [
    CommonModule,
    BookRoutes
  ],
  declarations: [
    BookListComponent
  ],
  providers: [
    BookRepository
  ],
  exports: [
    BookListComponent
  ]
})
export class BookModule { }
