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
  public libraryForm: FormGroup = this.formBuilder.group({
    name: ''
  });

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

  public saveLibrary() {
    if (!this.libraryForm.valid) {
      return;
    }

    const library: Library = new Library(null, this.libraryForm.controls['name'].value);

    this.libraryRepository.create(library)
    .subscribe(() => {
      this.fetchLibraries();
      this.libraryForm.reset();
    });
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
