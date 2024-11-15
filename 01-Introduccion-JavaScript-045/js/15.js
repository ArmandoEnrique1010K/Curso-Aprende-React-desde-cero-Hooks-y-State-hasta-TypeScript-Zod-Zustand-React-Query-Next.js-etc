// FUNCIONES - ARROW FUNCTIONS

// Se parecen mucho a los function expressions, no utilizan el termino funcion, en su lugar utilizan una flecha =>

// Cuando las funciones de flecha tiene una sola linea, puedes eliminar las llaves.
const sumar = (numero1 = 0, numero2 = 0) => console.log(numero1 + numero2);

// Compara con la sintaxis de un function expression
// const sumar = function (numero1 = 0, numero2 = 0) {
//   console.log(numero1 + numero2);
// };

sumar(10, 20);
sumar(300, 1);
sumar(100);

// Si se declara después de mandarla a llamar, puedes ver que marca un error
