var faker = require('faker');

var database = { productos: []};

for (var i = 1; i<= 20; i++) {
  database.productos.push({
    id: i,
    nombre: faker.commerce.productName(),
    descripcion: faker.lorem.sentence(),
    fechaFabricacion: faker.date.past(),
    numeroParte: faker.datatype.number(),
    Comentarios: faker.lorem.sentences()
  });
}

console.log(JSON.stringify(database));
