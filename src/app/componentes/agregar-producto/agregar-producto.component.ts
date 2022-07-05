import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/modelos/producto/producto.model';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {

  producto: Producto = {
    id: 0,
    nombre: '',
    descripcion: '',
    fechaFabricacion: new Date('2020-12-01'),
    numeroParte: 0,
    comentarios: ''
  }
  submitted = false;

  constructor(
    private productoService: ProductosService
  ) { }

  ngOnInit(): void {
  }
  salvarProducto(): void {
    const data = {
      id: 0,
      nombre: this.producto.nombre,
      descripcion: this.producto.descripcion,
      fechaFabricacion: this.producto.fechaFabricacion,
      numeroParte: this.producto.numeroParte,
      comentarios: this.producto.comentarios
    }
    this.productoService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error)
        }
      );
  }
  nuevoProducto(): void {
    this.submitted = false;
    this.producto = {
      id: 0,
      nombre: '',
      descripcion: '',
      fechaFabricacion: new Date('2020-12-01'),
      numeroParte: 0,
      comentarios: ''
    }
  }
}
