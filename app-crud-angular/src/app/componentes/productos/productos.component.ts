import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // 👈 Importar
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule], // 👈 Agregar aquí
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {
  productos: any[] = [];
  nuevoProducto = { nombre: '', descripcion: '', precio: 0 };

  constructor(private productosService: ProductosService) {}

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.productosService.getProductos().subscribe(data => this.productos = data);
  }

  agregar() {
    this.productosService.addProducto(this.nuevoProducto).subscribe(() => {
      this.listar();
      this.nuevoProducto = { nombre: '', descripcion: '', precio: 0 };
    });
  }

  eliminar(id: number) {
    this.productosService.deleteProducto(id).subscribe(() => this.listar());
  }
}
