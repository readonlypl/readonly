import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { Library } from './../library.model';
import { LibraryRepository } from './../library.repository';

@Component({
  selector: 'app-library-form',
  templateUrl: './library-form.component.html',
  styleUrls: ['./library-form.component.scss']
})
export class LibraryFormComponent {

  @Output()
  public onSave: EventEmitter<Library> = new EventEmitter<Library>();
  public libraryForm: FormGroup = this.formBuilder.group({
    name: ''
  });

  constructor(
    private formBuilder: FormBuilder,
    private libraryRepository: LibraryRepository
  ) { }

  public saveLibrary() {
    if (!this.libraryForm.valid) {
      return;
    }

    const library: Library = new Library(null, this.libraryForm.controls['name'].value);

    this.libraryRepository.create(library)
    .subscribe((createdLibrary: Library) => {
      this.onSave.emit(createdLibrary);
      this.libraryForm.reset();
    });
  }

}
