import { Component, OnInit, Input } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { SessionStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  dataUser: any = '';
  status: string;

  constructor(private _usuarioService: UsuariosService,
    private _router: Router, private sessionSt: SessionStorageService) {}
    @Input() title = 'Mi Recibo Digital';
    @Input() vista = 'cliente';

  ngOnInit() {}
  onSubmit() {
    this._usuarioService.getUsuario().subscribe(result => {
      console.log(result);
      for (let i = 0; i < result.length; i++) {
       if (result[i].email === this.model.email && result[i].password === this.model.password) {
         console.log('datos correctos');
          this.sessionSt.store('idCliente', result[i].id);
          this.sessionSt.store('nombreCliente', result[i].name);
         this.status = '1';
         if (this.vista === 'cliente') {
          this._router.navigate(['/reclamos']);
         } else if (this.vista === 'administrador') {
          this._router.navigate(['/backoffice']);
         }
       } else {
         this.status = '0';
       }
      }
    });
  }
}
