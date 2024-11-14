// OBJETOS - DESTRUCTURING DE DOS O MÁS OBJETOS
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "Juan",
  premium: true,
};

// Contexto de agregar un producto a un carrito de compras

// Agrega el objeto producto al objeto carrito, pero muestra todas las propiedades del objeto producto cuando se imprime en consola
// const carrito = {
//     cantidad: 1,
//     producto
// }

// Para unir los 2 objetos, se puede utilizar el operador Spread (...), expande todas las propiedades del objeto producto (elementos iterables)
const carrito = {
  cantidad: 1,
  ...producto, // spread operator
};

console.log(carrito);

// Une los 2 objetos en uno nuevo que incluye 2 objetos
// const nuevoObjeto = {
//   producto: { ...producto },
//   cliente: { ...cliente },
// };

// Une los 2 objetos en uno nuevo con el operador Spread (solamente se exparse sus propiedades de cada objeto en uno nuevo)
const nuevoObjeto = {
  ...producto,
  ...cliente,
};
console.log(nuevoObjeto);

// Object.assign() sirve para unir objetos, el resultado es el mismo que nuevoObjeto
const nuevoObjeto2 = Object.assign(producto, cliente);
console.log(nuevoObjeto2);
