// EVENTOS DEL DOM - INPUTS

// Selecciona el elemento que contiene un atributo id igual a "nombre"
const inputNombre = document.querySelector("#nombre");

// Lee el valor que el usuario ha escrito con el evento input
// https://developer.mozilla.org/en-US/docs/Web/API/Element/input_event

// El evento input se dispara cuando el valor de un elemento input, select o textarea ha sido modificado directamente como resultado de una acción del usuario. Tambien funciona con input de tipo checkbox y radio

inputNombre.addEventListener("input", (e) => {
  // Imprime cada vez que el usuario escribe
  // console.log("escribiendo..."); // Un mensaje estatico
  // console.log(e.target); // El elemento completo
  console.log(e.target.value); // El valor escrito hasta el momento
  console.log(e.target.value.length); // La cantidad de caracteres
});

// Selecciona el elemento que contiene id="password"
const inputPassword = document.querySelector("#password");
inputPassword.addEventListener("input", functionPassword);

// Por defecto un <input> de tipo password oculta el texto escrito con viñetas

// Se puede utilizar un evento para ocultar la contraseña luego de un cierto tiempo

// Función aparte asociada a un addEventListener
function functionPassword() {
  // Cambia el tipo del elemento <input>
  inputPassword.type = "text";

  // setTimeout es una función global que se dispara despues de cierto tiempo
  setTimeout(() => {
    // Cambia el <input> a tipo password luego de 300 milisegundos
    inputPassword.type = "password";
  }, 300);

  // 1000 milisegundos = 1 segundo
}
