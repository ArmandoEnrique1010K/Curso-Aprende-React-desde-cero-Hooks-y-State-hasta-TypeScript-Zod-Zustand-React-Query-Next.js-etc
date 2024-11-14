// TEMPLATE STRINGS Y CONCATENACIÓN
const producto = "Tablet de 12 Pulgadas";
const precio = 400;
const marca = "Orange";

// En JS se concatena una variable utilizando el signo coma (,) o más (+)
console.log("El Producto es: " + producto);

// Los template String (pantilla de caracteres) se utilizan para concatenar utilizando comillas inversas (`). Las variables se definen con: ${ }
console.log(`El Producto es: ${producto} `);

// Ambas lineas de codigo llevan al mismo resultado
console.log(producto + " $" + precio + " Dolares, marca: " + marca);
console.log(`${producto} $${precio} Dolares, marca: ${marca}`);
