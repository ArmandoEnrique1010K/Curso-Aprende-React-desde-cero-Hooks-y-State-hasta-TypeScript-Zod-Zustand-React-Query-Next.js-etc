// OPERADOR TERNARIO

// Se utiliza en React, en los componentes.

const auth = true;

const saldo = 1000;
const pagar = 1200;
const tarjeta = true;

// Condición con un bloque if y else
// if (auth) {
//   console.log("Usuario autenticado");
// } else {
//   console.log("No Autenticado, ir a Login");
// }

// Realiza el mismo procedimiento con el operador ternario

// Condición
auth
  ? // Si se cumple
    console.log("Usuario autenticado")
  : // Si no se cumple
    console.log("No Autenticado, ir a Login");

// El mismo ejemplo anterior si el usuario puede pagar o no
saldo > pagar || tarjeta
  ? console.log("Si puedes pagar")
  : console.log("no, no puedes pagar");

// Tambien se puede tener un ternario anidado como un bloque else if
saldo > pagar
  ? console.log("Si puedes pagar")
  : // Else if
  tarjeta
  ? console.log("Puedes pagar con tarjeta")
  : console.log("no, no puedes pagar");
