// ITERAR UN ARREGLO
const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Nest.js",
  "TypeScript",
];

// Puedes iterar en arreglos, de tal manera que puedas acceder a cada valor o elemento del arreglo

// Imprime cada uno de los elementos del arreglo por su indice
// console.log(tecnologias[0]);
// console.log(tecnologias[1]);
// console.log(tecnologias[2]);
// console.log(tecnologias[3]);
// console.log(tecnologias[4]);

// En el mismo contexto, si un arreglo tiene 100 elementos se tendria que definir el mismo codigo por cada elemento del arreglo

// Los metodos map y filter son iteradores para extraer elementos de un arreglo. Existen otras funciones que permiten iterar en un arreglo

// Un bucle for requiere un valor inicial, una condición y un incremento)
for (let i = 0; i < tecnologias.length; i++) {
  // Imprime el indice
  console.log(i);
  // Imprime el elemento
  console.log(tecnologias[i]);
}

// La propiedad length asociada a un arreglo permite obtener la cantidad de elementos que contiene un arreglo
console.log("Numero de elementos:" + tecnologias.length);

// Una vez que no se cumpla con la condición, termina con el bucle

// Se recomienda escribir el codigo forma dinamica, de tal manera que se adapte a todos los escenarios

/* */

// ALTERNATIVAS A BUCLE FOR

// El bucle for es un iterador que está en muchos lenguajes como C#, php o Django. JS tiene otros iteradores

// forEach

// Es un metodo que ejecuta una función indicada por cada elemento del arreglo, automaticamente sabe cuantos elementos hay en el arreglo y va ejecutarse únicamente esa cantidad de veces

// El parametro de la función puede tener cualquier nombre, pero usualmente el parametro se nombra en singular, un arreglo se nombra en plural
tecnologias.forEach(function (tech) {
  // Imprime cada elemento del arreglo
  console.log(tech);
});

// map

// Sirve para iterar, su caracteristica es crear un nuevo arreglo en base a las condiciones de la función
const arrayMap = tecnologias.map(function (tech) {
  return tech;
});

console.log(arrayMap);

// La diferencia entre forEach y map es que map te genera un nuevo arreglo.

// El metodo map es el más utilizado en React

// for ... of

// Es una sintaxis más clara que el forEach y ejecuta un bloque de codigo por cada elemento del arreglo. Solamente requiere el nombre de la variable que representa cada elemento y el nombre del arreglo
for (let tech of tecnologias) {
  console.log(tech);
}

// Es el menos utilizado
