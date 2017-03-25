import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { LibraryRepository } from './../library.repository';
import { Library } from './../library.model';

@Component({
  selector: 'app-library-list',
  templateUrl: './library-list.component.html',
  styleUrls: ['./library-list.component.scss']
})
export class LibraryListComponent implements OnInit {

  public libraries: Array<Library> = [];
  public selectedLibrary: Library = null;
  public addFormVisibility: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private libraryRepository: LibraryRepository
  ) { }

  ngOnInit() {
    this.fetchLibraries();
  }

  public selectLibrary(library: Library) {
    this.selectedLibrary = library;
  }

  public refreshList(library: Library) {
    this.selectLibrary(library);
    this.fetchLibraries();
  }

  private fetchLibraries() {
    this.libraryRepository.findAll()
    .subscribe((libraries: Array<Library>) => {
      this.libraries = libraries;

      if (this.selectedLibrary === null) {
        this.selectedLibrary = this.libraries[0];
      }
    });
  }
}
