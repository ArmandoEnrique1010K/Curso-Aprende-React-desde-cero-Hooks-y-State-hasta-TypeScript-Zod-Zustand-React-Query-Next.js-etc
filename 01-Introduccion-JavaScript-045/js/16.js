// FUNCIONES QUE RETORNAN VALORES

// Todas las funciones pueden retornar valores, cuando quieres separar un poco tu código, mandar llamar una función, procesar esa información y entonces hacer algo más con el resultado, como volver a llamar a otra función.

// Function expression
// const sumar = function(numero1 = 0, numero2 = 0) {
//     return numero1 + numero2
// }

// Function declaration
// function sumar(numero1 = 0, numero2 = 0) {
//     return numero1 + numero2
// }

// Recuerda que si una función no tiene un return, la función no devolvera nada, sino que se tratara como un procedimiento

// Arrow function
const sumar = (numero1 = 0, numero2 = 0) => numero1 + numero2;

// Los arrow function, si tiene una sola linea, no es necesario que tenga un return

// En los 3 ejemplos, las funciones se llaman, se pasan 2 valores como argumentos y luego se realiza una operación

// Hay muchos casos en los cuales se quiere mandar a llamar a una función y hacer algo con el resultado de esa función.

// Llama a la función y asigna el resultado en una variable
const resultado = sumar(10, 20);

// Ahora se puede hacer algo con la variable resultado
console.log(resultado);
