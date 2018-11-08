import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  items: Observable<any[]>;
  constructor(private _db: AngularFireDatabase) {}
  // Metodos para obtener los datos de la base de datos de Firebase
  getUsuario() {
    // Asignarle la lista de elementeos y toda la lista esta alamcenada en tareas
    this.items = this._db.list('users').valueChanges();
    return this.items;
  }
  // Vamos a utilizar un parametro Tarea que sera de clase Usuario
}
