import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../modelos/producto/producto.model';

const baseUrl = 'http://localhost:3000/productos'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private http:HttpClient) { }

  /**
   * Método:        getAll
   * Descripción:   función que permite conectarme al get de todos los productos
   * @returns 
   */
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
  /**
   * Método:        getAll
   * Descripción:   función que permite conectarme al get de un producto determinado
   * @param id      variable de tipo any que representa el id del producto que quiero obtener
   * @returns 
   */
  get(id: any): Observable<any> {
    console.log(`${baseUrl}/${id}`);
    return this.http.get(`${baseUrl}/${id}`);
  }
  create(data: Producto): Observable<any> {
    console.log(baseUrl, data);
    return this.http.post(baseUrl, data);
  }
  update(id: any, data: Producto): Observable<any> {
    console.log(`${baseUrl}/${id}`);
    return this.http.put(`${baseUrl}/${id}`, data)
  }
  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }
  findByName(name: any): Observable<any> {
    console.log(`${baseUrl}?nombre=${name}`);
    return this.http.get(`${baseUrl}?nombre=${name}`);
  }
}
