// OPERADORES IGUAL E IGUAL ESTRICTO
const numero1 = 20;
const numero2 = 20;

// ==  (Comparador no estricto)
// === (Comparador estricto)

// Ambos operadores sirven para verificar si son iguales 2 variables.
// La diferencia entre esos 2 operadores es que el operador estricto (===) compara por el tipo de dato mientras que el operador no estricto (==) realiza la conversión del tipo de variable si fuera necesario

if (numero1 === numero2) {
  console.log("Si, son iguales");
} else {
  console.log("No, no son iguales");
}

// Recuerda usar typeof para ver el tipo de dato de la variable
console.log(typeof numero2);

// En React se suele utilizar el operador === para revisar el tipo de dato
