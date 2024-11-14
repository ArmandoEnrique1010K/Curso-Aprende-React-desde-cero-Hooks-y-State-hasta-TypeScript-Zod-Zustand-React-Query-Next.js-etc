// MANIPULACIÓN DE OBJETOS

// Se trata de cambiar los valores de las propiedades de un objeto
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

// Reescribe el valor de la propiedad disponible
producto.disponible = true;

// En el caso de querer modificar el valor de una propiedad que no existe, como resultado se añade esa propiedad al objeto
producto.imagen = "imagen.jpg";

// El termino delete sirve para eliminar una propiedad de un objeto
delete producto.precio;

// EVITAR MANIPULAR UN OBJETO

// Para prevenir que un objeto se pueda modificar, existe 2 formas:

// Object.freeze() evita que se modifique el objeto en el que se esta aplicando de tal manera que no cambie sus valores ni se añada una nueva propiedad
// Object.freeze(producto)

// Object.seal() permite modificar las propiedades existentes, pero permite añadir ni eliminar ninguna propiedad.
// Object.seal(producto)

console.log(producto);
