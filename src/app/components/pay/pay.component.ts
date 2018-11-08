
import { Component, Input, OnInit } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  @Input() producto;
  closeResult: string;
  toggle: Boolean = false;
  /*
    producto = [
    {
      'categoria': 'lineas',
      'codigo': 43847,
      'descripcion': 'CanalesFox',
      'nombre': 'nombre',
      'precio': 180,
      'estado': false
    },
    {
      'categoria': 'lineas',
      'codigo': 43848,
      'descripcion': 'Deco adicional',
      'nombre': 'nombre',
      'precio': 250,
      'estado': false
    }
  ];
  */
  dataUser:any = {};
  dataProduct: any=[];



  constructor(private sessionSt: SessionStorageService, private _router: Router, private modalService: NgbModal) { }
  ngOnInit() {
    console.log(this.producto);
  }

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
      console.log('ccccc');
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  changeCheckbox(param) {
    console.log(param),
    console.log();
  }
  toggleCheck(param){
    console.log(param);
   if(param.estado===false){
     param.estado=true,
     this.dataProduct.push({
       'id': param.codigo,
       'estado':param.estado,
       'name':param.descripcion,
     })
   }else if(param.estado===true){
     param.estado=false;
     let index= this.dataProduct.findIndex(s=>{
       return s.id === param.codigo;
     });
     if (index !== -1) this.dataProduct.splice(index, 1);

   };

   this.dataUser = {
     'codigoCliente': this.sessionSt.retrieve('idCliente'),
     'productos': this.dataProduct
   };

  }
  sendSubmit() {
  /*   const sesion = this.sessionSt.store('nombre', 'rose') */
    console.log(this.dataUser);
    this.toggle = true;
  }

  viewPago() {
    this._router.navigate(['/pago']);
  }
}
