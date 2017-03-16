import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibraryRoutes } from './library.routing';
import { LibraryListComponent } from './library-list/library-list.component';

@NgModule({
  imports: [
    CommonModule,
    LibraryRoutes
  ],
  declarations: [
    LibraryListComponent
  ]
})
export class LibraryModule { }
