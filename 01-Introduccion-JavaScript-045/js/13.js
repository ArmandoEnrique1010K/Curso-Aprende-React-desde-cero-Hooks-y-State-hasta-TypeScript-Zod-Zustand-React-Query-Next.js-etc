// FUNCIONES - FUNCTION DECLARATION

// Permite escribir codigo reutilizable en JavaScript

// En lugar de escribir todo el código junto vas a separarlo en pequeñas funciones. Cada función tiene que tener un propósito y tiene que servir para algo.

// El nombre de la función sigue la mismas reglas que una variable, no puede empezar con un numero, ni caracteres especiales. Pero si puede empezar con un guión bajo.

// Las funciones tienen parametros, es una variable especial que se utiliza en una función, cuyo valor se refiere a valores que vienen del exterior.

// Puedes utilizar parametros por defecto al asignarle un valor por defecto

// Sintaxis para definir una función
function sumar(numero1 = 0, numero2 = 0) {
  console.log(numero1 + numero2);
}

// El numero de parametros que tiene una función debe coincidir con el numero de argumentos que se pasan al momento de llamar a la función.

// Sintaxis para llamar a la función
sumar(10, 20);
sumar(100, 131);

// Si se omiten argumentos, en este caso la función imprimira un "NaN" (not at number)
sumar(10);

// La definición de la función en este contexto se conoce como function declaration
