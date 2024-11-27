// Pega aqui el type de Guitar y coloca un export al inicio para poder importalo manualmente en los componentes necesarios
export type Guitar = {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number
} 

// Crea otro objeto para un articulo del carrito (sin herencia)
// export type CartItem = {
//   id: number,
//   name: string,
//   image: string,
//   description: string,
//   price: number,
//   // Agrega el campo quantity
//   quantity: number
// } 

// Nota: Cada vez que tu escribes codigo, se dice hazlo que funcione y después si lo puedes mejorar, mucho mejor.

// HERENCIA EN TYPESCRIPT

// TypeScript permite heredar

// Ambos types Guitar y CartItem comparten muchos atributos, puedes aplicar herencia para reflejar los cambios hechos en Guitar al type CartItem

// Utiliza la siguiente sintaxis para heredar el type Guitar (reutiliza las mismas propiedades del type Guitar)
export type CartItem = Guitar & {
    quantity: number,
};

// Sintaxis si se va a utilizar un interface
// export interface CartItem extends Guitar {
//     quantity: number,
// };

// Recuerda que hereda todo el tipo de dato y sus atributos completos, puedes reescribirlos, en este caso cambia el tipo de dato de id a string
// export type CartItem = Guitar & {
//     quantity: number,
//     id: string
// };

// UTILITY TYPE EN TYPESCRIPT

// Mantiene los mismos tipos de datos de otra instancia de otro type y solamente selecciona los deseados

// Solamente funciona con los types

// https://www.typescriptlang.org/docs/handbook/utility-types.html

// SINTAXIS CON PICK

// Permite elegir ciertos elementos del otro type, hereda los tipos de dato. En este caso utiliza las propiedades id, name y price de type Guitar
// export type CartItem = Pick<Guitar, 'id' | 'name' | 'price'> & {
//     quantity: number,
// };

// SINTAXIS CON OMIT

// Permite quitar ciertos elementos del otro type, en este caso se omite la propiedad image
// export type CartItem = Omit<Guitar, 'image'> & {
//     quantity: number,
// };


// TYPE PARA EL ID CON PICK

// Se tendria que usar un Pick para extraer unicamente el id
// export type GuitarID = Pick<Guitar, "id">;

// Puedes cambiar el tipo de dato de id

// LOOKUP PARA EL ID

// Otra forma es utilizar corchetes, tambien llamado lookup, solamente se puede utilizar una propiedad
// export type GuitarID = Guitar['id'];

// Error, puede tomar uno de los 2 tipos de datos de la propiedad id o name
// export type GuitarID = Guitar['id' | 'name'];
