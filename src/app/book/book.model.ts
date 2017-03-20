import { Publisher } from './publisher.model';
import { Author } from './author.model';
export class Book {

  constructor(
    public id: number,
    public isbn: string,
    public title: string,
    public author: Author,
    public publisher: Publisher,
    public publishInfo: string,
    public pages: number
  ) {

  }

}
