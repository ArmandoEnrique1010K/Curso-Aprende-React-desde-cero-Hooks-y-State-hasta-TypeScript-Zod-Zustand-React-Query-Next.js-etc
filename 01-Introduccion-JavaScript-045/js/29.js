// MANIPULAR ELEMENTOS HTML CON JS

// Selecciona los elementos HTML que corresponde a las clases
const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

// Recuerda que con textContent se muestra el contenido del elemento HTML
console.log(heading.textContent);

// Para modificar el contenido de un elemento HTML se asigna un nuevo valor a la propiedad textContent
heading.textContent = "Un nuevo heading...";

// Modifica el contenido del atributo id
heading.id = "Un nuevo ID";

// No funciona un delete con un querySelector
// delete heading.textContent

// Se puede colocar un metodo removeAttribute para eliminar el atirbuto
heading.removeAttribute("class");

// Los formularios pueden tener un valor por defecto, se puede hacer lo siguiente
const inputNombre = document.querySelector("#nombre");

// El atributo value asociado a un elemento <input> sirve para mostrar un valor en el campo del formulario. Utiliza el atributo value para asignar un valor
inputNombre.value = "Un nuevo valor...";

// Como se llamen los atributos usualmente, casi siempre es el nombre de los atributos que vas a tener en JS, a exepcion de algunos:

// Valores del atributo class
console.log(inputNombre.classList);

// Asignar un atributo personalizado, como data-nombre="input"
inputNombre.dataset.nombre = "input";

/* */

// Manipular una colección

// Muestra un NodeList como un arreglo, cada elemento representa un enlace definido con el elemento <a></a>
console.log(enlaces);

// Recuerda que se utiliza un querySelectorAll para seleccionar todos los enlaces

// Cambiar el texto del primer enlace
enlaces[0].textContent = "Nuevo enlace";

// Cambiar el texto de todos los enlaces
enlaces.forEach((enlace) => (enlace.textContent = "Nuevo Enlace"));
