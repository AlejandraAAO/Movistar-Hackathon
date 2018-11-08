import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './app.routes'; // routes

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PaymentComponent } from './components/payment/payment.component';
import { SendEmailService } from './components/services/send-email.service';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { RouterModule } from '@angular/router';
import { BackofficeComponent } from './components/administrator/backoffice/backoffice.component';
import { PayComponent } from './components/pay/pay.component';
import { Ng2Webstorage } from 'ngx-webstorage'
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    PaymentComponent,
    AdministratorComponent,
    BackofficeComponent,
    PayComponent,
    UsersComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
  
    ReactiveFormsModule,
    Ng2Webstorage,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
     NgbModule

  ],
  providers: [
    SendEmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
