import { Component, OnInit } from '@angular/core';
import { SendEmailService } from '../../services/send-email.service';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-correo',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {
  data: any = null;
  users: any = [];
  dataUser: any = [];
  status = '0';
  constructor(
    private _serviceEmail: SendEmailService,
    private _firebase: UsuariosService
  ) {}

  ngOnInit() {}

  sendEmail() {
    this._firebase.getUsuario().subscribe(result => {
      this.users = result;
      this.users.forEach(element => {
        this.dataUser.push({
          name: element.name,
          email: element.email
        });
      });
      this.dataUser.forEach(data => {
        const template = this.template(data.email, data.name);
        this._serviceEmail.sendEmail(template).subscribe(result2 => {
        });
      });
      this.status = '1';
    });
  }

  template(email, name) {
    this.data = {
      key: 'ZGiSDAUGJIgaCMIqm9ysPA',
      message: {
        html:
          `<p style="color:black; font-size:16px">` + `Hola ` + `${name} ` + `</p>` +
          `<p style="color:black; font-size:16px">` + `Te comunicamos que ya puedes ver tu recibo en: <a href='zesty-glue.surge.sh'>Recibo</a>` + `</p>`,
        text: 'Movistar',
        subject: 'Notificación de pago',
        from_email: 'Movistar@laboratoria.la',
        from_name: 'MOVISTAR',
        to: [
          {
            email: email,
            name: 'Empresa Movistar',
            type: 'to'
          }
        ]
      }
    };
    return this.data;
  }
}
