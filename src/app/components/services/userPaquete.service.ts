import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserPaqueteService {
  items: Observable<any[]>;
  paquetes: Observable<any[]>;
  userProducto: Observable<any[]>;
  filterData: Observable<any[]>;

  constructor(private _db: AngularFireDatabase) {}
  // Metodos para obtener los datos de la base de datos de Firebase
  getProducts() {
    // Asignarle la lista de elementeos y toda la lista esta alamcenada en tareas
    this.items = this._db.list('userPaquete').valueChanges();
    return this.items;
  }

  getPaquete() {
    this.paquetes = this._db.list('paquetes').valueChanges();
    return this.paquetes;
  }

  getUserPaquete() {
    this.userProducto = this._db.list('userPaquete').valueChanges();
    return this.userProducto;
  }
}
