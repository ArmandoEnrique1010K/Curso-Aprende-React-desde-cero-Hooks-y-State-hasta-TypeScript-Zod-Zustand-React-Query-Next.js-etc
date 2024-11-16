// FETCH API CON PROMISES

// Fetch API proporciona una interfaz para recuperar recursos para poder obtener datos a través de la red

// JSON Placeholder ofrece APIs publicas para mostrar los datos contenidos en tus aplicaciones
// https://jsonplaceholder.typicode.com/

// La siguiente URL muestra un arreglo que contiene objetos, cada objeto contiene datos
const url = "https://jsonplaceholder.typicode.com/comments";

// Para utilizar fetch API hay 2 opciones:

// Mandarlo a llamar directamente en el codigo
// Colocarlo dentro de una función y luego llamarla manualmente

// Cuando se llama a la función global fetch requiere de la url, en el que buscara y obtendrá los datos

// Fetch API utiliza Promises, fueron agregados en la version ECMASCRIPT 6

// Los promises cuentan con varios pasos y estados. El metodo then() sirve para definir un paso, dentro de ella se define un callback o función de flecha

// Imprime en la consola el objeto Response, que posee varios atributos como body, headers, ok (el valor true indica que si existe la URL), status (200 si lo ha encontrado, de lo contrario un 404) y la url (la misma URL en el que se hace la consulta)

fetch(url).then((response) => {
  console.log(response);
});

// Las API se comunican por numeros (status)

// Los datos se encuentran dentro de [[Prototype]], además de incluir otros metodos como json y text

fetch(url)
  // Espera a que obtenga la respuesta
  .then((response) => {
    // Si la propiedad ok es true, obtiene la respuesta aplicando el metodo json
    if (response.ok) {
      return response.json();
    }
    // Si no hay respuesta, genera un error con el constructor Error
    throw new Error("Hubo un error...");
  })
  // Muestra los datos
  .then((data) => console.log(data))

  // El metodo catch sirve para mostrar un error (solamente si no se obtienen datos), por ejemplo si la URL es incorrecta

  // Obtiene el valor de la propiedad message para mostrar el error personalizado
  .catch((error) => console.log(error.message));

// Los promises encadenan metodos then para llamar a la URL y verificar si se pueden obtener los datos

// Recuerda que una función de flecha ocupa una sola linea de codigo, se puede omitir las llaves
