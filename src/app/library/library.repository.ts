import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Library } from './library.model';
import { environment } from './../../environments/environment';

@Injectable()
export class LibraryRepository {

  constructor(
    private http: Http
  ) {}


  public findAll(): Observable<Array<Library>> {
    return this.http.get(environment.apiUrl + 'libraries')
      .map((response: Response): Array<Library> => {
        return response.json()
          .map((library) => new Library(library.id, library.name));
      });
  }

  public create(library: Library) {
    return this.http.post(
      environment.apiUrl + 'libraries',
      library
    )
    .map((response) => new Library(response.json().id, response.json().name))
    ;
  }

}
