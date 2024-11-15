// Funciones exportables

// En un proyecto se puede tener un archivo que contenga funciones

// La desventaja de un archivo grande es que se llena de condiciones y funciones, y si se quiere reutilizar esas funciones, en lugar de utilizar solamente las funciones necesarias se tiene que importar todas las funciones.

// --> Todo eso se ha solucionado con los modulos de ECMASCRIPT

// El termino export permite importar funciones en otros archivos de tal manera que sean exportables desde este archivo

// Function declaration
export function sumar(n1, n2) {
  return n1 + n2;
}

// Arrow function
export const restar = (n1, n2) => n1 - n2;

export const multiplicar = (n1, n2) => n1 * n2;

export const division = (n1, n2) => n1 / n2;

// Otra forma de exportar
// export { sumar, restar, multiplicar, division };

// Recuerda colocar el termino export para exportar, de lo contrario ocurrira un error en la consola

// Tambien existe la exportación por defecto, tiene 2 caracteristicas:
// - Solamente puede haber export default por archivo
// - Al momento de importarlo se puede nombrar con cualquier nombre

// export default function multiplicar2(n1, n2) {
//   return n1 * n2;
// }

// En el caso que sea una función de flecha para que se pueda exportar por defecto se tendria que hacer lo siguiente:

// const multiplicacion = (n1, n2) => n1 * n2;
// export default multiplicacion;
