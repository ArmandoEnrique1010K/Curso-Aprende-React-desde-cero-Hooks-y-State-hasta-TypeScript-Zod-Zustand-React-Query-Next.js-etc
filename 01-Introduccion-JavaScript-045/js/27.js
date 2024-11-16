// PERFORMANCE Y MULTIPLE ASYNC AWAIT

// Se tiene varias URLs de Json Placeholder
const url = "https://jsonplaceholder.typicode.com/comments"; // 500 objetos
const url2 = "https://jsonplaceholder.typicode.com/todos"; // 200 objetos
const url3 = "https://jsonplaceholder.typicode.com/photos"; // 5000 objetos

const consultarAPI = async () => {
  try {
    // Mide el perfomance o el tiempo
    const inicio = performance.now();

    // Obtiene los datos de todas las APIs mediante la URL definida
    // Esto es un error comun de desarrollo porque se realiza 3 peticiones hacia diferentes URLs
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // Recuerda que await espera a que se realice el llamado y luego ejecuta la siguiente linea (de derecha a izquierda). Por ello ralentiza la aplicación
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    console.log(data2);

    const response3 = await fetch(url3);
    const data3 = await response3.json();
    console.log(data3);

    // Establece el fin del performance
    const fin = performance.now();

    // Muestra el tiempo de demora en milisegundos, cambia cada vez que se recarga la pagina
    console.log(`El resultado de la PRIMERA función es: ${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI();

// Una aplicación real obtiene datos de muchos lugares como aplicaciones CRM o ERP, sistema que consume datos.

const consultarAPI2 = async () => {
  try {
    const inicio = performance.now();

    // El siguiente codigo da un mejor performance

    // Desestructura un arreglo y luego coloca todas las peticiones fetch dentro de un Promise.all dentro de un nuevo arreglo para que el codigo se ejecute al mismo tiempo
    const [response, response2, response3] = await Promise.all([
      fetch(url),
      fetch(url2),
      fetch(url3),
    ]);

    // Puedes colocar dentro de un Promise.all, para obtener los datos
    const [data, data2, data3] = await Promise.all([
      response.json(),
      response2.json(),
      response3.json(),
    ]);

    // Imprime los datos
    console.log(data);
    console.log(data2);
    console.log(data3);

    const fin = performance.now();

    // Mide el performance
    console.log(`El resultado de la SEGUNDA función es: ${fin - inicio} ms`);
  } catch (error) {
    console.log(error.message);
  }
};

consultarAPI2();

// Compara la diferencia en el navegador
