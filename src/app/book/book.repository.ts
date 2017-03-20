import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Library } from './../library/library.model';
import { Publisher } from './publisher.model';
import { Author } from './author.model';
import { Book } from './book.model';
import { environment } from './../../environments/environment';

@Injectable()
export class BookRepository {

  constructor(
    private http: Http
  ) {}


  public findAllByLibrary(library: Library): Observable<Array<Book>> {
    return this.http.get(environment.apiUrl + 'books-to-libraries?_expand=book&libraryId=' + library.id)
      .map((response: Response): Array<Book> => {
        return response.json()
          .map((data) => {
            // TODO: find a way to fetch athor and publisher data too
            // const author: Author = new Author(book.author.id, book.author.firstName, book.author.lastName);
            // const publisher: Publisher = new Publisher(book.publisher.id, book.publisher.name, book.publisher.address);

            return new Book(data.book.id, data.book.isbn, data.book.title, null, null, data.book.publishInfo, data.book.pages);
          });
      });
  }

}
