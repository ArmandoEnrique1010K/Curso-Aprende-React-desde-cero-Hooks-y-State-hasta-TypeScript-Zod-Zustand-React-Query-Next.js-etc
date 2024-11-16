// EVENTOS DEL DOM - SUBMIT

// Selecciona el formulario del documento HTML
const formulario = document.querySelector("#formulario");

// Un evento submit se llama cuando alguien presiona el boton del formulario para enviarlo
formulario.addEventListener("submit", (e) => {
  // Recuerda que se debe desactivar la accion por defecto del formulario cuando se envia. Por defecto en un elemento <form> se define un atributo action que contiene la URL a donde se enviara el formulario
  e.preventDefault();

  // Imprime un mensaje
  console.log("Enviando formulario...");

  // Selecciona el elemento <input> por su id para seleccionar su atributo value. Value hace referencia al texto que ha introducido el usuario en el campo
  const nombre = document.querySelector("#nombre").value;
  const password = document.querySelector("#password").value;

  // Imprime el valor introducido
  console.log(nombre);
  console.log(password);

  // Se puede crear codigo HTML a partir de JS

  // Prueba introduciendo lo siguiente en la consola de chrome
  // const heading = document.querySelector('.heading')
  // heading  // Devuelve el elemento HTML completo
  // heading.tagName // Devuelve el nombre de la etiqueta HTML en mayusculas

  // La API de JS detecta elementos en mayusculas

  // Escribe lo siguiente
  // const enlace = document.querySelector('.navegacion a')
  // enlace.tagName // Devuelve el nombre de la etiqueta HTML en mayusculas

  // Al presionar varias veces en el botón de iniciar sesión se puede generar varios mensajes de alerta al mismo tiempo. Una solución es seleccionar el elemento con la clase "alerta"
  const alertaPrevia = document.querySelector(".alerta");

  // Si hay un mensaje de alerta en el documento HTML se elimina el mensaje de alerta anterior
  //   if (alertaPrevia) {
  //     alertaPrevia.remove();
  //   }

  // Forma simplificada con el operador optional chaining
  alertaPrevia?.remove();

  // Crea un nuevo elemento HTML (incluye etiqueta de apertura y cierre), el nombre se define en mayusculas
  const alerta = document.createElement("DIV");

  // Añade contenido al elemento HTML creado
  alerta.textContent = "Contenido de alerta";

  // Agrega una lista de clases (valores en el atributo class)
  // alerta.classList = "clase-1 clase-2";

  // Actualmente se recomienda usar lo siguiente, el metodo add, dentro se coloca las clases separadas por comas
  alerta.classList.add(
    // Se agrega la clase "alerta"
    "alerta",
    "text-white",
    "uppercase",
    "text-sm",
    "text-center",
    "p-2",
    "font-black"
  );

  // Para evitar que el usuario envie el formulario con campos vacios, se tendria que hacer una validación
  if (nombre === "" || password === "") {
    // console.log("Todos los campos son obligatorios...");

    // Genera un mensaje de alerta si se cumple la condición
    alerta.textContent = "Todos los campos son obligatorios...";
    // Añade unas clases al mensaje de alerta
    alerta.classList.add("bg-red-500");
  } else {
    // console.log("Todo bien, iniciando sesión...");
    alerta.textContent = "Todo bien, iniciando sesión...";
    alerta.classList.add("bg-green-500");
  }

  // appendChild agrega un elemento hijo al elemento formulario (si incluye elementos hijos, lo agrega al final), en este contexto
  formulario.appendChild(alerta);

  // Imprime el nuevo elemento en la consola
  console.log(alerta);

  // Para borrar el mensaje de alerta despues de cierto tiempo, se puede utilizar un setTimeout
  setTimeout(() => {
    // El metodo remove elimina el elemento
    alerta.remove();
  }, 3000);
});
