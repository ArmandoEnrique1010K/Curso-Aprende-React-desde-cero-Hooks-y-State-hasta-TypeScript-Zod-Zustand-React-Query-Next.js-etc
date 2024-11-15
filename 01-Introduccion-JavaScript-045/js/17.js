// ARRAY METHODS
const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
const numeros = [10, 20, 30];

// Filter
// Permite extraer un elemento del arreglo o mantener ese elemento y sacar todos los demás en base a cieras condiciones

// La mayoria de metodos requieren de una función con un parametro

// Imprime cada elemento del arreglo
// const elementos = tecnologias.filter(ejemploFilter);

// function ejemploFilter(tech) {
//   console.log(tech);
// }

// En la consola se tendrá la linea de codigo similar a esto: 17.js:13, tiene el nombre del archivo y la linea de codigo en donde se llama a la función

// Recuerda utilizar funciones de flecha
// const ejemploFilter = (tech) => console.log(tech);
// const elementos = tecnologias.filter(ejemploFilter);

// La mayoria de programadores itera sobre cada uno de los elementos
// const elementos = tecnologias.filter((tech) => console.log(tech));

// Para eliminar "HTML" del nuevo arreglo se puede hacer lo siguiente
const nuevoArray = tecnologias.filter((tech) => tech !== "HTML");
console.log(nuevoArray);

// Forma alternativa (más lineas de codigo)
// const nuevoArray = tecnologias.filter(function (tech) {
//   if (tech !== "HTML") {
//     return tech;
//   }
// });

// Opcionalmente en funciones de flecha, si tiene un parametro, se puede eliminar los parentesis

// Filtra todos los elementos que tengan valores mayores que 15
const resultado1 = numeros.filter((numero) => numero > 15);
console.log(resultado1);

// Includes
// Revisa si existe un elemento en el arreglo

// Devuelve true si existe el elemento "CSS"
const resultado2 = tecnologias.includes("CSS");
console.log(resultado2);

// Nota: La mayoria de metodos tiene un callback, una función de orden superior, una función que toma otra función.

// Some
// Devuelve true si al menos uno cumple la condición
const resultado3 = numeros.some((numero) => numero > 15);
console.log(resultado3);

// Anteriormente se tenia que hacer lo siguiente para verificar si hay elementos en un arreglo

// const resultado1 = numeros.filter((numero) => numero > 15);
if (resultado1.length > 0) {
  console.log("Si hay elementos");
} else {
  console.log("No hay elementos");
}

// Con el metodo some es más corto

// Find
// Devuelve el primer elemento que cumple una condición
const resultado4 = numeros.find((numero) => numero > 20);
console.log(resultado4);

// Every
// Retorna true o false si todos cumplen la condición
const resultado5 = numeros.every((numero) => numero > 5);
console.log(resultado5);

// Reduce
// Retorna un acumulado del total
// Es uno de los metodos más complejos, toma 2 parametros
// El 0 representa el valor inicial
const resultado6 = numeros.reduce((total, numero) => {
  console.log(total);
  //  Imprime los elementos del arreglo
  console.log(numero);
}, 0);
console.log(resultado6);

// Para sumar el primer elemento del arreglo con el valor inicial y luego agregue el resultado al segundo elemento y siga realizando la misma operación.

// Recuerda que se puede omitir el return en funciones de flecha
const resultado7 = numeros.reduce((total, numero) => total + numero, 0);

// 0 + 10 = 10 + 20 = 30 + 30 = 60
console.log(resultado7);

// El metodo reduce se utiliza en carrito de compras

// Existen varios metodos en la documentación
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
