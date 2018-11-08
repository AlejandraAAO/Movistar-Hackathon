import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { ROUTES } from './app.routes'; // routes

import { AppComponent } from './app.component';
import { SendEmailService } from './components/services/send-email.service';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { RouterModule } from '@angular/router';
import { BackofficeComponent } from './components/administrator/backoffice/backoffice.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministratorComponent,
    BackofficeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
  ],
  providers: [
    SendEmailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
