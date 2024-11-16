// FETCH API CON ASYNC / AWAIT

// Los terminos async y await se utilizan para definir una promesa, es una sintaxis más moderna

const url = "https://jsonplaceholder.typicode.com/comments";

// fetch(url)
//     .then((response) => {
//         if(response.ok) {
//             return response.json()
//         }
//         throw new Error('Hubo un error...')
//     })
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// Recuerda que si utilizas Fetch API con Promises, se puede colocar dentro de una función de tipo declaration o arrow

// const consultarAPI = () => {
//   fetch(url)
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       }
//       throw new Error("Hubo un error...");
//     })
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error.message));
// };

// La función tiene que ser asincrona, para aquello se coloca el termino async
const consultarAPI = async () => {
  // Al utilizar async y await no hay forma de obtener un error, en su lugar se utiliza un bloque try - catch
  try {
    // Los metodos then pueden ser reemplazados por un await, espera a que se finalice esa linea para ir a la siguiente
    // En este caso, se espera a que ocurra una respuesta y se asigna a una variable
    const response = await fetch(url);

    // Lanza un error si la propiedad ok es false
    if (!response.ok) {
      throw new Error("Hubo un error...");
    }
    // Se utiliza un await para obtener los datos
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Dentro del bloque try se coloca las acciones que se intentaran hacer, en catch se coloca el error
    console.log(error.message);
  }
};

// Llama a la función
consultarAPI();

// Es posible mostrar en el navegador el mensaje de error
