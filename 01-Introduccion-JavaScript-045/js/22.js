// OPTIONAL CHAINING (?)

// Optional chaining permite acceder a las propiedades de un objeto o llamar metodos de propiedades sin tener que verificar si existen o no
const alumno = {
  nombre: "Juan",
  clase: "Programación 1",
  aprobado: true,
  examenes: {
    examen1: 90,
  },
};

// Recuerda que si se muestra un error en la consola, se interrumpe todo el programa, el codigo deja de funcionar

// No existe la propiedad examen0 en el objeto anidado examenes del objeto alumno
// console.log(alumno.examenes.examen0)

// El operador optional chaining hace que devuelva un undefined si la propiedad no existe
console.log(alumno.examenes?.examen0);
console.log("Después de ALUMNO");

// Si la propiedad existe, muestra el valor de la propiedad
console.log(alumno.examenes?.examen1);

// El operador optional chaining se utiliza en respuestas de una API REST o de una base de datos en donde no retornan todos los campos

/* */

// NULLISH COALESCING OPERATOR (??)

// Operador logico que retorna el operando o valor del lado derecho cuando el valor del lado izquierdo es nulo (null o undefined)

// En el contexto del paginador desde la URL se tiene "?page=1"
const pagina = null ?? 1;
console.log(pagina);
