import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [
    SidebarComponent,
    HeaderComponent,
    PageNotFoundComponent
  ],
  exports: [
    SidebarComponent,
    HeaderComponent
  ]
})
export class UiModule { }
