// MODIFICAR ARRAYS

const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

// Puedes utilizar console.table para mostrar el indice al que pertenece el elemento del arreglo
// console.table(tecnologias)

// const tecnologias2 = tecnologias.filter(function(tech) {
//     if(tech !== 'HTML') {
//         return tech
//     }
// })

const tecnologias2 = tecnologias.map(function (tech) {
  if (tech === "Node.js") {
    return "Nest.js";
  } else {
    return tech;
  }
});

console.log(tecnologias2);
