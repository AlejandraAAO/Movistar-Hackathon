import { Component } from '@angular/core';
import { SessionStorageService } from 'ngx-webstorage';


@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent {
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
  dataUser:any = {};
  dataProduct: any=[];



  constructor(private sessionSt: SessionStorageService) {



  }

 

  changeCheckbox(param) {
    console.log(param),
    console.log();

    
  }
  toggleCheck(param){
   if(param.estado===false){
     param.estado=true,
     this.dataProduct.push({
       'id': param.codigo,
       'estado':param.estado,
       'name':param.name,
     })
   }else if(param.estado===true){
     param.estado=false;
     let index= this.dataProduct.findIndex(s=>{
       return s.id === param.codigo;
     });
     if (index !== -1) this.dataProduct.splice(index, 1);
     
   }
   this.dataUser={
     'codigoCliente':'123',
     'productos': this.dataProduct
   }
  
  }
  sendSubmit() {
    
  /*   const sesion = this.sessionSt.store('nombre', 'rose') */
    console.log(this.dataUser);
    

  }
}

