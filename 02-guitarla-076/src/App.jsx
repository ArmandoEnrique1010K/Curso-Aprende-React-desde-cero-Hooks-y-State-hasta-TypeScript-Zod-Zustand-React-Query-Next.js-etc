import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Guitar } from "./components/Guitar";

import { db } from "./data/db";

function App() {

  const [data, setData] = useState(db);
  const [cart, setCart] = useState([]);

  // Crea una función intermedia para agregar un producto al carrito y verificar si el elemento ya existe en el carrito

  // En lugar de utilizar guitar como parametro, se utiliza el termino item para representar un elemento del carrito
  function addToCart(item) {
    // Antes de establecer el estado, se tiene que verificar si ya existe en el carrito

    /* */

    // INMUTABILIDAD EN REACT

    // No se modifica el state, sino que se utiliza una función para modificar el state.

    // El metodo push de un arreglo, modifica el arreglo original, en su lugar se utiliza el operador spread para clonar los elementos iterables del arreglo original.

    // setCart(prevCart => cart.push(item));
    // setCart(prevCart => [...prevCart, item]);

    // Esta pagina contiene los array methods de JavaScript y explica si el metodo modifica el arreglo original o no
    // https://doesitmutate.xyz/

    // El metodo findIndex retorna el indice del elemento del arreglo en caso de que lo encuentre, de lo contrario retorna "-1".

    // En este caso, crea un objeto temporal (se almacena en el parametro guitar) y verifica si ya existe ese objeto segun su id
    const itemExists = cart.findIndex(guitar => guitar.id === item.id);

    // Imprime "-1" si el elemento no existe en el arreglo cart y en el caso de que exista el elemento, imprime el indice del elemento
    // console.log(itemExists);

    // Si el elemento existe en el carrito no lo agrega, de lo contrario lo agrega
    if (itemExists >= 0) {
      // console.log("Ya existe...")

      // Se tiene que actualizar la cantidad del elemento que ya existe

      // Esto modifica directamente el state, recordar que el state es inmutable
      // cart[itemExists].quantity ++

      // Utiliza el operador Spread
      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++
      setCart(updatedCart);

    } else {
      // console.log("No existe, agregando...")

      // Si no existe, la cantidad se establece en 1, recuerda que item es un objeto
      item.quantity = 1;

      // Puedes comprobar el arreglo cart en React Developers Tools, componente App
      // setCart(prevCart => [...prevCart, item]);

      // Forma simplificada
      setCart([...cart, item]);
    }

  }

  return (
    <>
      {/* Se tiene que pasar el state de cart para mostrar los items en la aplicación */}
      <Header cart={cart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((guitar) => (
              <Guitar
                key={guitar.id} guitar={guitar}
                cart={cart}
                // Se elimina la función setCart, en su lugar se va a utilizar addToCart
                addToCart={addToCart}
              />
            ))

          }
        </div>
      </main>


      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">GuitarLA - Todos los derechos Reservados</p>
        </div>
      </footer>
    </>
  )
}

export default App