// MODIFICAR ARRAYS

const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

// Reasigna el elemento del arreglo
// tecnologias[4] = "Nest.js"

// Si se coloca un indice que no existe en el arreglo, agrega el elemento en el indice especificado (saltea los indices que faltan)
// tecnologias[10] = "Nest.js"

// Puedes utilizar console.table para mostrar el indice al que pertenece el elemento del arreglo
// console.table(tecnologias)

// Para hacerlo de forma dinamica sin conocer el indice, existen métodos.

// En la consola de Chrome, al expandir el tipo Array, se puede ver todos los metodos que se pueden aplicar en el arreglo, cada tipo de dato tiene sus propios metodos.

/* */

// INMUTABILIDAD

// El metodo push agrega un elemento al final del arreglo
// tecnologias.push("Nest.js");

// En react, siempre el codigo se escribe con funciones y metodos que no modifiquen directamente el state (los valores);

// La siguiente pagina muestra los metodos de un arreglo que modifican sus elementos o devuelve una nueva instancia del arreglo
// https://doesitmutate.xyz/

// El metodo push si modifica los elementos del arreglo

// En su lugar se tiene que usar lo siguiente para generar un nuevo arreglo y no modificar el original
const nuevoArreglo = [...tecnologias, "Nest.js"];
console.table(nuevoArreglo);

/* */

// ELIMINAR UN ELEMENTO

// El metodo shift elimina el primer elemento de un arreglo, tambien modifica el arreglo original
// tecnologias.shift();

// En su lugar se tendría que utilizar el metodo filter, dentro de ella se define una función, tech sirve para acceder a cada elemento del arreglo, dentro de la función se define una condición

// Para eliminar un elemento se utiliza el operador !== dentro de la condición, retorna cada elemento, a excepción del elemento diferente
// const tecnologias2 = tecnologias.filter(function(tech) {
//     if(tech !== 'HTML') {
//         return tech
//     }
// })

/* */

// MODIFICAR UN ELEMENTO

// Recuerda que la siguiente sintaxis modifica el arreglo original
// tecnologias[4] = "Node.js";

// En su lugar se tendría que utilizar el metodo map para acceder a cada uno de los elementos y dentro de la función se define una condición para renombrar el elemento. Tambien se tendria que retornar los demás elementos si no cumple con la condición
const tecnologias2 = tecnologias.map(function (tech) {
  if (tech === "Node.js") {
    return "Nest.js";
  } else {
    return tech;
  }
});

console.log(tecnologias2);

// El metodo map no muta el arreglo original
