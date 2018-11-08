import { Routes } from '@angular/router';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { BackofficeComponent } from './components/administrator/backoffice/backoffice.component';

export const ROUTES: Routes = [

  // Administrator
  { path: 'administrador', component: AdministratorComponent },
  { path: 'backoffice', component: BackofficeComponent },
];
