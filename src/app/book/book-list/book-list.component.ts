import { Component, Input, OnInit } from '@angular/core';

import { Library } from '../../library/library.model';
import { BookRepository } from './../book.repository';
import { Book } from './../book.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  @Input()
  public set library(library: Library) {
    if (library === null) {
      return;
    }

    this.selectedLibrary = library;
    this.fetchLibraryBooks(library);
  }

  public books: Array<Book> = [];
  public selectedLibrary: Library = null;

  constructor(
    private bookRepository: BookRepository
  ) { }

  ngOnInit() {
  }

  public fetchLibraryBooks(library: Library) {
    this.bookRepository.findAllByLibrary(library)
      .subscribe((books: Array<Book>) => this.books = books);
  }

}
