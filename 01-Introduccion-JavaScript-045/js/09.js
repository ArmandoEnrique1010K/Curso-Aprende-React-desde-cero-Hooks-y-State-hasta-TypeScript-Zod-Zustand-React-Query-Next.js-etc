// ARRAYS O ARREGLOS

// Un array es un objeto similar a un listado

// Existen metodos para efectuar operaciones de recorrer ese arreglo o modificar y realizar operaciones.

// Los arreglos pueden contener cualquier tipo de dato, pero se recomienda que tenga estructura y todos sus elementos pertenezcan al mismo tipo de dato

// Sintaxis de un arreglo
const tecnologias = [20, 30, 40, true, "React.js"];

// Los arreglos solamente tienen valores y su llave o nombre va a ser el indice de acuerdo a la posición del arreglo. Su llave se genera de forma automatica.

// En los objetos tu defines tus llaves y en los arreglos se asignan por posición o indice.
console.table(tecnologias);
console.log(tecnologias);

// Imprime el segundo elemento del arreglo (indice 1)
console.log(tecnologias[1]);

// Si el indice no existe, imprime undefined
console.log(tecnologias[6]);
