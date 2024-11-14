// OBJETOS - DESTRUCTURING DE DOS O MÁS OBJETOS
const producto = {
  nombre: "Tablet",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "Juan",
  premium: true,
  direccion: {
    calle: "Calle México",
  },
};

// Recuerda que se extrae la propiedad nombre del objeto producto como una variable
const { nombre } = producto;

// Si se quiere obtener la propiedad nombre del objeto cliente, ocurrira un error, porque se esta generando 2 variables con el mismo nombre:
// const { nombre } = cliente;

// La solución es renombrar la variable al momento de acceder a ella:
// const { nombre: nombreCliente } = cliente;

// Es util cuando se quiere importar librerias, cuyos nombres coinciden.

// Si se quiere acceder al objeto calle, se puede utilizar lo siguiente:
// const { nombre: nombreCliente, direccion: calle } = cliente;
// console.log(calle);

// Puede ser algo confuso
// Cuando tienes un objeto dentro de otro objeto y quieres aplicar destructuring, tienes que abrir llaves y luego la propiedad a la que se quiere acceder
const {
  nombre: nombreCliente,
  direccion: { calle },
} = cliente;

console.log(nombre);
console.log(nombreCliente);

console.log(calle);
