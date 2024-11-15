const saldo = 1000;
const pagar = 1200;
const tarjeta = false;

// OPERADORES LOGICOS OR Y AND
// || Or - Al menos una se cumple
// && And - Revisa que todas se cumplan

// Ejecuta el codigo definido dentro de else if si la primera condición no se cumple
if (saldo > pagar) {
  console.log("Puedes pagar");
} else if (tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No no puedes pagar");
}

// Recuerda que en una condición se ejecuta los bloques de codigo de arriba hacia abajo

// Solamente si se cumple con una de las 2 condiciones, se imprime "Puedes Pagar"
if (saldo > pagar || tarjeta) {
  console.log("Puedes Pagar");
} else {
  console.log("No no puedes pagar");
}

// Los operadores logicos evitan tener que utilizar varios bloques if y else
