import { Routes, RouterModule } from '@angular/router';

import { LibraryListComponent } from './library-list/library-list.component';

const routes: Routes = [
  {
    path: 'library',
    component: LibraryListComponent
  }
];

export const LibraryRoutes = RouterModule.forChild(routes);
