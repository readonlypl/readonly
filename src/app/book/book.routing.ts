import { Routes, RouterModule } from '@angular/router';

import { BookListComponent } from './book-list/book-list.component';

const routes: Routes = [
  {
    path: 'book',
    children: [
      {
        path: 'list',
        component: BookListComponent
      }
    ]
  },
];

export const BookRoutes = RouterModule.forChild(routes);
