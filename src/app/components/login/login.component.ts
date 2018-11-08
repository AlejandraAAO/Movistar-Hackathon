import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';

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
    private _router: Router) {}

  ngOnInit() {}
  onSubmit() {
    this._usuarioService.getUsuario().subscribe(result => {
      for (let i = 0; i < result.length; i++) {
       if (result[i].email === this.model.email && result[i].password === this.model.password) {
         console.log('datos correctos');
         this.status = '1';
         this._router.navigate(['/administrador']);
       } else {
         this.status = '0';
       }
      }
    });
  }
}
