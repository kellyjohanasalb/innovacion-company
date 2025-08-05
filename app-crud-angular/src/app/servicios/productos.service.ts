import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductosService {
   private apiUrl = 'http://localhost:8080/backend-php/api.php';
;


  constructor(private http: HttpClient) {}

  getProductos(): Observable<any> {
    return this.http.get('http://localhost:8080/backend-php/api.php');
  }

  addProducto(producto: any): Observable<any> {
    return this.http.post(this.apiUrl, producto);
  }

  updateProducto(producto: any): Observable<any> {
    return this.http.put(this.apiUrl, producto);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.request('DELETE', this.apiUrl, { body: { id } });
  }
}
