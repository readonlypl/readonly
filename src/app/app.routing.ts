import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './ui';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'library'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

export const AppRoutes = RouterModule.forRoot(routes);
