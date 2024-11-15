// EVALUACIÓN DE CORTO CIRCUITO

// Tambien llamado short circuit, es cuando una expresión se trata como "truthy". En JS se tiene una variable de tipo boolean
const auth = true;

// Tomando el siguiente ejemplo, imprime "Truthy"
if (40) {
  console.log("Truthy");
} else {
  console.log("Falsy");
}

// La palabra truthy en JS es un valor que es considerado verdadero cuando se evalua en un contexto de boolean.

// No todos los valores van a ser truthy, al menos que sean definidos como false

// Los siguientes valores no son true o false, pero si los evaluas como true o false, entonces decide si es true o false y quiere decir que no es verdaderamente un true y no es verdaderamente un false.

// Basicamente es un valor que si se coloca en un contexto de boolean, lo va a evaluar.

// Si se evalua uno de estos valores, retorna "Truthy"
// new Date()
// "false"
// []
// {}

// Pero si se evalua estos valores, retorna "Falsy"
// 0
// false

// Otros valores se encuentran aqui:
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy

// Evaluación de corto circuito (ejecuta una condición y evalua el codigo)
auth && console.log("Usuario Autenticado");

// Es la forma simplificada de un operador ternario
auth ? console.log("Usuario Autenticado") : "";
