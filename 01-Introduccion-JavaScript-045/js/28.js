// SELECTORES

// Todas las iteraciones que se hacen en el DOM o codigo HTML por medio de JS requieren o inician con un selector (como en CSS, seleccionar un elemento para cambiar su apariencia)

// document se refiere a la pagina, todo el codigo HTML
// Algunos elementos requieren usar un metodo llamada querySelector o querySelectorAll

// Anteriormente se utilizaba los metodos
// - getElementById - selecciona el elemento por el valor de su atributo id
// - getElementsByClassName - selecciona todos los elementos por el valor de su atributo class
// - getElementsByTagName - selecciona todos los elementos por el nombre de su etiqueta HTML

// Hoy en dia se recomienda usar querySelector para seleccionar un elemento se puede utilizar cualquier selector como:
// ".clase"
// "#id"
const heading = document.querySelector(".heading");

// Imprime el elemento HTML asociado al selector con todos sus atributos y elementos
console.log(heading);

// Tambien tienes acceso a sus atributos del elemento seleccionado

// El nombre de la etiqueta HTML
console.log(heading.tagName);

// Contenido del elemento
console.log(heading.textContent);

// Clases (valores del atributo class)
console.log(heading.classList);

// Si no tiene un atributo id, no imprime nada
console.log(heading.id);

// QuerySelector solamente selecciona el primer elemento HTML asociado a la clase definida en este contexto
const enlaces = document.querySelector(".navegacion a");
console.log(enlaces);

// Si se tiene varios elementos con la misma clase, al imprimir aparece un NodeList que contiene
const enlaces2 = document.querySelectorAll(".navegacion a");
console.log(enlaces2);

// La diferencia entre querySelector y querySelectorAll es que querySelector te puede traer hasta un elemento o nada, mientras que querySelectorAll trae todos los elementos
