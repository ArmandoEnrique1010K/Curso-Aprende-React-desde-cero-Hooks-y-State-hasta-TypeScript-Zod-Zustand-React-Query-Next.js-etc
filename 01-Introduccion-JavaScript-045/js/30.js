// EVENTOS DEL DOM - CLICKS

// JS fue creado para darle interacciones a las aplicaciones web, puede agregarle interacciones a los elementos, botones, al escribir en un campo y realizar acciones, etc
const heading = document.querySelector(".heading");

// Cambia el titulo por uno nuevo
heading.textContent = "Nuevo titulo";

// Cuando seleccionas un elemento, tienes acceso a registrarle un evento con el metodo addEventListener (requiere un tipo de evento y una función que se ejecutara con el evento). La función puede ser una función aparte o una función de flecha

// Element es una interfaz que no existe, pero que contiene una serie de eventos como animaciones, cuando se copia algo, teclado, mouse
// https://developer.mozilla.org/en-US/docs/Web/API/Element

// Un evento de mouse es click se activa cuando se presiona sobre un elemento. dblclick es doble click (cuando se abre un archivo).
// heading.addEventListener("click", () => {
//   heading.textContent = "Nuevo heading al dar click...";
// });

// El evento mouseenter (similar al hover en CSS) se activa solamente cuando se coloca el cursor sobre el elemento. Por otro lado mouseleave es cuando se el mouse sale del elemento

// Cambia el titulo cuando el mouse se coloque sobre el titulo
// heading.addEventListener("mouseenter", () => {
//   heading.textContent = "Nuevo heading al dar click...";
// });

// Cambia el titulo cuando el mouse se retire del titulo
// heading.addEventListener('mouseleave', () => {
//     heading.textContent = 'Saliendo...'
// })

// Selecciona todos los enlaces con la clase ".navegacion" y que contenga un elemento <a></a>
const enlaces = document.querySelectorAll(".navegacion a");

// Aplica un evento a cada enlace
enlaces.forEach((enlace) => {
  // Al hacer clic en el enlace
  enlace.addEventListener("click", (e) => {
    // Imprime información sobre el evento como la posición en donde se encuentra el elemento asociado
    console.log(e);

    // Imprime el elemento en el que se ha dado clic,
    console.log(e.target);

    // Como los enlaces, apuntan a un "#" (definido en el atributo href), si se quiere evitar un salto porque es un enlace, se puede definir el metodo preventDefault (previene el comportamiento por defecto del elemento)
    e.preventDefault();

    // generalmente preventDefault permite que tu puedas definir que acción es la que se va a realizar en un formulario como una validación

    // Cambia el contenido del elemento por uno nuevo
    e.target.textContent = "Diste click...";
  });
});
