// MODULOS DE ECMASCRIPT

// Se utilizan bastante en React y en el desarrollo web, por ejemplo al instalar una dependencia, importa las funciones para utilizarlas en el codigo

// Importa las funciones necesarias del archivo funciones.js. Las importaciones se colocan al inicio del archivo

import { sumar, restar, multiplicar, division } from "./funciones.js";

// Para evitar la colisión de nombres, cuando se tiene 2 modulos o funciones con el mismo nombre se puede reenombrar la función con el termino as
// import { sumar as funcionSumar } from "./funciones.js";

// const resultado = funcionSumar(20, 10);

// Esto es util al importar dependencias

// Recuerda que las funciones deben estar definidas, si se importa una funcion que no esta definida se obtendrá un error en la consola "The request module ./funciones.js does not provide an export named..."

// Tambien todas las funciones que se importan se deben utilizar en algun contexto

// Importa una función que se exporta por defecto, se utiliza cualquier nombre y se coloca fuera de las llaves
// import multiplicacion, {sumar, restar, multiplicar, division} from "./funciones.js";

// const resultado = multiplicacion(20, 10);

// El codigo es más facil de mantener y escalar
const resultado1 = sumar(20, 10);
const resultado2 = restar(20, 10);
const resultado3 = multiplicar(20, 10);
const resultado4 = division(20, 10);

// Imprime el resultado de cada función
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);
console.log(resultado4);

// Los modulos estan presente en todas las tecnologias de JS: node.js, angular, react, etc.
