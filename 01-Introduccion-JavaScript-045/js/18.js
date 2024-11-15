// CONDICIONALES

// Se utiliza para revisar si cumple una condición, por ejemplo si un usuario esta autenticado, si puede pagar o no, si las credenciales son correctas o no, etc.

const disponible = 200;
const retirar = 200;

const auth = false;

// Dentro de los parentesis se coloca la condición, siempre se ejecuta un bloque de codigo en base a la condición.

// En este caso si auth es false
if (!auth) {
  // Si se cumple la condición
  console.log("No tienes permiso, inicia sesion");
} else {
  // No se cumple la condición
  console.log("Acceso al sistema");
}

/* */

// OPERADORES DE COMPARACIÓN

// Se utilizan en las condiciones

// > Mayor que
// < Menor que
// >= Mayor o igual
// <= Menor o igual
// == igual
// === Igual estricto
// !== Diferente a

if (disponible >= retirar) {
  console.log("Si puedes retirar");
} else {
  console.log("Saldo insuficiente");
}
