import { Component, OnInit, ViewChildren } from '@angular/core';
import { UserPaqueteService } from '../services/userPaquete.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { SessionStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [NgbAccordionConfig]
})
export class UsersComponent implements OnInit {

  data: any = [];
  paquetes: any;
  adicionales: any;
  arrPaquete: any = [];
  arrProductos: any = [];
  idCliente: number;
  name;

  constructor(private _paqueteUser: UserPaqueteService, config: NgbAccordionConfig, private sessionSt: SessionStorageService) {
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
    this.idCliente = +this.sessionSt.retrieve('idCliente');
    this.name = this.sessionSt.retrieve('nombreCliente');
    this._paqueteUser.getUserPaquete().subscribe(result => {
      const user = result.filter(x => x.idCliente === this.idCliente)[0];
      // console.log(user.paquetes);
      for (let i = 0; i < user.paquetes.length; i++) {
        if (user.paquetes[i] === undefined) {
          continue;
        }
        this._paqueteUser.getPaquete().subscribe(result4 => {
          this.paquetes = result4.filter(x => x.idPaquete === user.paquetes[i].idPaquete)[0];
          // this.adicionales = result4.filter(x => x.idPaquete === user.paquetes[i].idPaquete)[0];
          this.adicionales = user.adicionales;

          const productos = [];
          this.paquetes.productos.forEach(element => {
            if (element !== undefined) {
              // console.log(element);
              productos.push(element);
            }
          });
          this.arrPaquete.push(this.paquetes);
          // this.arrPaquete.paquetes.push(productos);
          // this.arrPaquete = this.arrPaquete.p = 'xx';
          // console.log(this.arrPaquete);
        });
      }
      // console.log(this.arrPaquete);
    });
  }
}
