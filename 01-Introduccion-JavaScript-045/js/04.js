// OBJETOS

// Un objeto es una colección de propiedades y una propiedad es una asociación entre un nombre o clave y un valor.

// En un objeto se utiliza dos puntos (:) para asignar el valor de una propiedad. Puede ser de cualquier tipo de dato. Los objetos pueden tener multiples propiedades.

// Sintaxis para definir un objeto
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

console.log(producto);
console.log(typeof producto);

// Forma alternativa para imprimir un objeto (separa nombres y valores)
// Tambien funciona con arreglos
console.table(producto);

// Muestra el valor de la propiedad nombre, se utiliza sintaxis de punto
console.log(producto.nombre);

// Si una propiedad no esta definida, muestra undefined
console.log(producto.autenticado);

/* */

// DESTRUCTURING

// En versiones anteriores de JS, para acceder a los nombres de la propiedades de un objeto se utilizaba:
// const nombre = producto.nombre
// const precio = producto.precio
// const disponible = producto.disponible

// console.log(nombre)
// console.log(precio)
// console.log(disponible)

// Hoy en dia se utiliza la desestructuración, permite extraer una variable y generarla en una sola linea de codigo
const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

/* */

// OBJECT LITERAL ENHACEMENT

// Sirve para colocar variables dentro de un objeto
const autenticado = true;
const usuario = "Juan";

// Se utiliza cuando se tiene una función que realiza ciertas operaciones y en lugar de retornar un monton de variables, se retorna un objeto
const nuevoObjeto = {
  // autenticado: autenticado,
  // usuario: usuario,

  // Forma simplificada (solamente se aplica cuando el nombre y valor son iguales)
  autenticado,
  usuario,
};
console.log(nuevoObjeto);
