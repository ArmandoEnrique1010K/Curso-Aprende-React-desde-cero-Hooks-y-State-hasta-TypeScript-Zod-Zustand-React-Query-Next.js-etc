// DESTRUCTURING ARRAYS
const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

// Almacena en una variable el cuarto elemento del arreglo
const react = tecnologias[3];

// Para desestructurar un arreglo se utiliza corchetes.
// Accede al primer elemento mediante una variable
const [html] = tecnologias;
console.log(html);

// La desestructuración no funciona buscando el valor que coincida con el mismo nombre de la variable, sino que extrae un valor en base a su posición
const [html5, css, nodejs] = tecnologias;

// Imprime "JavaScript"
console.log(nodejs);

// Conforme se vaya definiendo variables se va asignando a la posición del arreglo en el que se aplica

// Para omitir las variables, de tal manera que no se genere variables, se utiliza comas para omitirlas
const [, , , reactjs] = tecnologias;

// Imprime "React.js"
console.log(reactjs);
