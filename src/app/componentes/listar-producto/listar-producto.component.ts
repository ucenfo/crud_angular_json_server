import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto/producto.model';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-listar-producto',
  templateUrl: './listar-producto.component.html',
  styleUrls: ['./listar-producto.component.css']
})
export class ListarProductoComponent implements OnInit {
  productos: Producto [] = [];
  productoActual: Producto = new Producto();
  currentIndex = -1;
  nombre = '';
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }
  obtenerProductos(): void {
    this.productosService.getAll()
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refrescarLista(): void {
    this.obtenerProductos();
    this.productoActual = new Producto();
    this.currentIndex = -1;
  }

  setActivarProducto(producto: any, index: number): void {
    this.productoActual = producto;
    this.currentIndex = index;
  }

  eliminarTodosProductos(): void {
    this.productosService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.obtenerProductos();
        },
        error => {
          console.log(error);
        });
  }

  buscarNombre(): void {
    this.productosService.findByName(this.nombre)
      .subscribe(
        data => {
          this.productos = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
