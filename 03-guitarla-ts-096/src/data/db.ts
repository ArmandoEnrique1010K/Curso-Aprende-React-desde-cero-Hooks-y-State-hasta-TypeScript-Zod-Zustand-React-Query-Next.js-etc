// TIPOS DE DATOS DE LAS PROPIEDADES DE UN OBJETO 

// Coloca el cursor en la variable db para ver los tipos de datos inferidos por TS

// Cambia uno de los id de number a String y TypeScript inferira que se trata de un number o un string el id

// Cuando se trabaja con objetos, se recomienda que typescript no infiera con el tipo de dato, sino que se cree los tipos de datos para el grupo

// TYPES E INTERFACES

// 2 de las caracteristicas que más vas a utilizar en TypeScript son Types e Interfaces

// Ambas pueden ser utilizadas incluso de forma intercambiable, hay muy pocas diferencias entre ambos y en la comunidad vas a encontrar ejemplos con ambos

// Es una forma de crear una estructura o agrupar propiedades de un objeto

// CREAR EL TYPE PARA LAS GUITARRAS

// Utiliza la siguiente sintaxis de type para representar un objeto con propiedades para especificar los tipos de datos

type Guitar = {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number
} 

// Recuerda que typescript ayuda sin compilar el proyecto para ver los errores, en este caso con el tipo de dato

// CREAR EL INTERFACE PARA LAS GUITARRAS

// Es casi similar a un Type :)

// interface Guitar {
//   id: number,
//   name: string,
//   image: string,
//   description: string,
//   price: number
// } 

// UTILIZAR EL TYPE O EL INTERFACE

// Coloca unos dos puntos y el objeto Guitar seguido de un arreglo vacio para aplicar a todos los elementos del arreglos el tipo de dato (cada uno de los objetos).

export const db : Guitar[] = [
  {
    id: 1,
    name: "Lukather",
    image: "guitarra_01",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 299,
  },
  {
    id: 2,
    name: "SRV",
    image: "guitarra_02",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 349,
  },
  {
    id: 3,
    name: "Borland",
    image: "guitarra_03",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 329,
  },
  {
    id: 4,
    name: "VAI",
    image: "guitarra_04",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 299,
  },
  {
    id: 5,
    name: "Thompson",
    image: "guitarra_05",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 399,
  },
  {
    id: 6,
    name: "White",
    image: "guitarra_06",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 329,
  },
  {
    id: 7,
    name: "Cobain",
    image: "guitarra_07",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 349,
  },
  {
    id: 8,
    name: "Dale",
    image: "guitarra_08",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 379,
  },
  {
    id: 9,
    name: "Krieger",
    image: "guitarra_09",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 289,
  },
  {
    id: 10,
    name: "Campbell",
    image: "guitarra_10",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 349,
  },
  {
    id: 11,
    name: "Reed",
    image: "guitarra_11",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 399,
  },
  {
    id: 12,
    name: "Hazel",
    image: "guitarra_12",
    description:
      "Morbi ornare augue nisl, vel elementum dui mollis vel. Curabitur non ex id eros fermentum hendrerit.",
    price: 379,
  },
];
