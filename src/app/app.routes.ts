import { Routes } from '@angular/router';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { BackofficeComponent } from './components/administrator/backoffice/backoffice.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PayComponent } from './components/pay/pay.component';

export const ROUTES: Routes = [

  // Administrator
  { path: '', component: PaymentComponent},
  { path: 'administrador', component: AdministratorComponent },
  { path: 'backoffice', component: BackofficeComponent },
  { path: 'pagos', component: PayComponent},
];
