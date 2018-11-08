import { Component, OnInit, ViewChildren } from '@angular/core';
import { UserPaqueteService } from '../services/userPaquete.service';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import { SessionStorageService } from 'ngx-webstorage';
import { ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None,
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
  adicionalesPaquete;
  dataTotal;

  constructor(private _paqueteUser: UserPaqueteService, config: NgbAccordionConfig, private sessionSt: SessionStorageService) {
    config.closeOthers = true;
    config.type = 'info';
  }

  ngOnInit() {
    this.idCliente = +this.sessionSt.retrieve('idCliente');
    this.name = this.sessionSt.retrieve('nombreCliente');
    this._paqueteUser.getUserPaquete().subscribe(result => {
      const user = result.filter(x => x.idCliente === this.idCliente)[0];

      for (let i = 0; i < user.paquetes.length; i++) {
        // console.log(user);


        if (user.paquetes[i] === undefined) {
          continue;
        }
        this._paqueteUser.getPaquete().subscribe(result4 => {
          // console.log(result4);

          this.paquetes = result4.filter(x => x.idPaquete === user.paquetes[i].idPaquete)[0];
          // console.log(user.paquetes[i].adicionales);
          // console.log(result4);

          // this.adicionales = result4.filter(x => x.idPaquete === user.paquetes[i].idPaquete)[0];
          this.adicionales = user.adicionales;

          const productos = [];
          this.paquetes.productos.forEach(element => {
            if (element !== undefined) {
              // console.log(element);
              productos.push(element);
              // console.log(productos);
            }
          });
          this.arrPaquete.push( {
            'paquete' : this.paquetes,
            'adicionales': user.paquetes[i].adicionales
          });
          // this.arrPaquete.paquetes.push(productos);
          // this.arrPaquete = this.arrPaquete.p = 'xx';
          // console.log(this.arrPaquete);
        });
      }
      console.log(this.arrPaquete);
    });
  }
}
