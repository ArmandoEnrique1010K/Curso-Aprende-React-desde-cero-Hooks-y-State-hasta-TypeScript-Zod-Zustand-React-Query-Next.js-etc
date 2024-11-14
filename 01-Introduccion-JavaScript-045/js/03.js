// TIPOS DE DATOS

// Los comentarios en JavaScript se definen con:

// Comentario de una linea

/*
    Comentario multilinea
*/

/* */

// JavaScript tiene tipos de datos
// Recuerda que se utilizan let y const para definir una variable

/* */

// Undefined
// La variable fue definida pero no tiene valor asignado
let cliente;
console.log(cliente);

// Imprime el tipo de dato de la variable
console.log(typeof cliente);

/* */

// Strings o Cadenas de Texto
// Representan texto, se utilizan comillas dobles o simples
let alumno = "Juan";
console.log(alumno);
console.log(typeof alumno);

const producto = "Monitor 49 Pulgadas";
console.log(producto);
console.log(typeof producto);

// En Visual Studio Code, coloca el cursor sobre el nombre de una variable para observar su tipo de dato

/* */

// Numbers
// Existen numeros enteros y flotantes, los numeros se definen sin comillas

const numero = 20.2;
const numero2 = 30;
const numero3 = -100;
const numero4 = "20";

console.log(typeof numero);
console.log(typeof numero2);
console.log(typeof numero3);

// Si se suma un String con un number se concatenan
console.log(numero4 + numero2);

/* */

// BigInt
// Es un nuevo tipo de dato en JS, no es de mucha utilidad, representa un numero muy grande.

// En JS existen constructores, pero no se utilizan, el siguiente es un constructor BigInt para definir un numero muy grande
const numeroGrande = BigInt(19381903839113838981391383198138913);
console.log(typeof numeroGrande);

/* */

// Boolean
// Es como un interruptor, tiene 2 valores: true o false
// Es el tipo de dato más utilizado, se utiliza por ejemplo cuando se autentica un usuario
const descuento = true;
console.log(typeof descuento);

/* */

// Null
// Es un valor que no existe, requiere que se asigne.
// Puedes inicializar variables con null
const descuento2 = null;
console.log(descuento2);

// Recuerda que undefined se utiliza en variables creadas
let precio = undefined;
console.log(precio);

/* */

// Symbol
// Se utilizan en librerias
// Su caracteristica es que cada Symbol es diferente a otro, incluyendo Symbol iguales que tienen el mismo valor
// El constructor Symbol se utiliza para definir un Symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);

// Imprime false, porque los Symbols son diferentes, aunque no se note visualmente.
console.log(primerSymbol === segundoSymbol);
