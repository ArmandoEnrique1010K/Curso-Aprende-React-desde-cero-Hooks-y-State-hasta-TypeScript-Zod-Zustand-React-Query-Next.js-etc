// FUNCIONES - FUNCTION EXPRESSION

sumar(10, 20);
sumar(300, 1);
sumar(100);

// Esto se conoce como function expression
// La sintaxis detecta esto como una variable y no como una función
const sumar = function (numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
};

// Compara la diferencia con un function declaration
// function sumar(numero1 = 0, numero2 = 0) {
//   console.log(numero1 + numero2);
// }

// La diferencia es que si se llama a la función antes de definirla ocurrira un error en este contexto.

// La solución es utilizar un function declaration. Lo que hace JavaScript es registrar primero todas las funciones que tienen la sintaxis de un function declaration y luego, en un segundo llamado comienza a ejecutar las funciones

// La sintaxis de function declaration no esta obsoleta. Todavia se utiliza en React.
