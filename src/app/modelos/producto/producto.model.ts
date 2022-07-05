export class Producto {
    constructor(
        public id: number,
        public nombre: string,
        public descripcion: string,
        public fechaFabricacion: Date,
        public numeroParte: number,
        public comentarios: string) { }
}