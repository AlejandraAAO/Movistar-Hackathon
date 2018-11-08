import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
declare let Culqi: any;

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  model: any = {};
  dataUser: any = '';
  closeResult: string;
  status = '0';
  constructor(
    private _usuarioService: UsuariosService,
    private modalService: NgbModal
  ) { }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    Culqi.publicKey = 'pk_test_8LziUpumbvUTLFnv';
    Culqi.init();
  }
  onSubmit() {
    Culqi.createToken();
    this.status = '1';

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
