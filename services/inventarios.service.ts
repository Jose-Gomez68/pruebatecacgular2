import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventariosService {

  constructor(private http: HttpClient) { }

  postInventario(clave: string, descripcion:string, lote:string, caducidad:string, cantidad:number){

    let insert = {"clave": clave,"descripcion": descripcion,"lote": lote, "caducidad": caducidad, "cantidad": cantidad }
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(`http://localhost:4000/api/v1/farm1/inventario/insertMedic`,insert,{headers});

  }

  postInventario2(clave: string, descripcion:string, lote:string, caducidad:string, cantidad:number){

    let insert = {"clave": clave,"descripcion": descripcion,"lote": lote, "caducidad": caducidad, "cantidad": cantidad }
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(`http://localhost:4000/api/v1/farm2/inventario/insertMedic`,insert,{headers});

  }

  postInventario3(clave: string, descripcion:string, lote:string, caducidad:string, cantidad:number){

    let insert = {"clave": clave,"descripcion": descripcion,"lote": lote, "caducidad": caducidad, "cantidad": cantidad }
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(`http://localhost:4000/api/v1/farm3/inventario/insertMedic`,insert,{headers});

  }

  postInventario4(clave: string, descripcion:string, lote:string, caducidad:string, cantidad:number){

    let insert = {"clave": clave,"descripcion": descripcion,"lote": lote, "caducidad": caducidad, "cantidad": cantidad }
    let headers = new HttpHeaders({'Content-Type':'application/json'});

    return this.http.post(`http://localhost:4000/api/v1/farm4/inventario/insertMedic`,insert,{headers});

  }

}
