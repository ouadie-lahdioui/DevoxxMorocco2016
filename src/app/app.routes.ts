import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SessionsComponent } from './sessions/sessions.component';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'sessions',
    component: SessionsComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];
