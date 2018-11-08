import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
declare let Culqi: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  model: any = {};
  dataUser: any = '';
  constructor(
    private _usuarioService: UsuariosService
  ) { }

  ngOnInit() {
    Culqi.publicKey = 'pk_test_8LziUpumbvUTLFnv';
    Culqi.init();
  }
  onSubmit() {
    Culqi.createToken();

    //     this._usuarioService.getUsuario().subscribe(result => {
    //       for (let i = 0; i < result.length; i++) {
    //         if (result[i].email === this.model.email) {
    //           console.log('datos correctos');
    //         } else {
    //           console.log('datos incorrectos');
    //         }
    //        }
    //     }

    // );
}

culqi() {
  if (Culqi.token) { // ¡Objeto Token creado exitosamente!
      const token = Culqi.token.id;
      alert('Se ha creado un token:' + token);
  } else { // ¡Hubo algún problema!
      // Mostramos JSON de objeto error en consola
      console.log(Culqi.error);
      alert(Culqi.error.user_message);
  }
};
}
