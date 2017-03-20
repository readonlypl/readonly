import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LibraryRoutes } from './library.routing';
import { LibraryListComponent } from './library-list/library-list.component';
import { LibraryRepository } from './library.repository';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LibraryRoutes
  ],
  declarations: [
    LibraryListComponent
  ],
  providers: [
    LibraryRepository
  ]
})
export class LibraryModule { }
