import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Guitar } from "./components/Guitar";

import { db } from "./data/db";

function App() {

  // Al actualizar la pagina web, todo el contenido de cart se pierde, para evitar eso se tiene que revisar en localStorage para obtener el valor inicial, de lo contrario un arreglo vacio.

  // Constante para el valor del carrito de compras
  const initialCart = () => {
    // Obtiene los datos utilizando getItem y la key del carrito
    const localStorageCart = localStorage.getItem("cart");

    // En el caso de que localStorageCart tenga algo, se tiene que convertir a un String con JSON.parse, de lo contrario su valor inicial seria un arreglo vacio
    return localStorageCart ? JSON.parse(localStorageCart) : []

  }

  // Como no se utiliza la función setData para actualizar el estado de data, se elimina
  // const [data, setData] = useState(db);
  const [data] = useState(db);

  // El estado inicial se establece llamando a la función initialCart
  const [cart, setCart] = useState(initialCart);

  // Constante para limitar la cantidad de items (Clean Code, se utiliza Mayusculas)
  // Recuerda que modificas este valor y se aplica a todo
  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  // Efecto secundario, cada vez que cart cambia se ejecuta un localStorage, efectos secundarios cuando el state cambia, react se encarga de sincronizar una vez que ese state haya completado su acción en base de actualizarse con las demás funciones
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])


  function addToCart(item) {
    const itemExists = cart.findIndex(guitar => guitar.id === item.id);

    // Recuerda que ejecuta la condición si el item esta en el carrito
    if (itemExists >= 0) {

      // Revisa la posición actual y si la cantidad es mayor o igual que que MAX_ITEMS, no devuelva nada
      if (cart[itemExists].quantity >= MAX_ITEMS) return;

      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }

    // En lugar de llamar a la función para almacenar el carrito en localStorage, se utiliza un useEffect
    // saveLocalStorage()
  }

  // Función para eliminar un producto del carrito
  function removeFromCart(id) {
    // Un metodo de un arreglo para eliminar es el metodo filter, filtra en base a una condición, 

    // Utiliza el valor previo del carrito con el metodo filter para filtrar todas cuyo id sea diferente a la que se esta pasando
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id))

    // console.log("Eliminando...", id)
  }

  // Función intermedia para incrementar la cantidad
  function increaseQuantity(id) {
    // El metodo map sirve para iterar con un arreglo, a diferencia de forEach, este metodo retorna un arreglo nuevo
    const updatedCart = cart.map(item => {
      // Utiliza una condición para obtener el id del item

      // Tambien se limita la cantidad de items, en este caso que no pase de MAX_ITEMS
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          // Mantiene el resto de las propiedades
          ...item,
          // Modifica la cantidad
          quantity: item.quantity + 1
        }
      }

      // Se mantiene la cantidad del resto de los elementos, sobre los cuales no se ha dado clic 
      return item;
    })

    // Establece el carrito actualizado
    setCart(updatedCart)

    // console.log("incrementando ", id)
  }

  // Solución al RETO 01 para decrementar cantidades
  // Practicamente se repite algunas funcionalides de la función anterior :)
  function decreaseQuantity(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item;
    })
    setCart(updatedCart)
  }

  // Función para limpiar el carrito de compras
  function clearCart() {
    // Setea un arreglo vacio
    setCart([])
  }

  // Función para almacenar en el localStorage (En su lugar se utiliza un useEffect)
  // localStorage una API sencilla, solamente permite almacenar Strings, en el caso de arreglos se tiene que convertir a un String con JSON.stringify
  // function saveLocalStorage() {
  //   // setItem sirve para establecer el nombre y valor
  //   localStorage.setItem('cart', JSON.stringify(cart))
  // }

  // Para ver el valor que se almacena en el localStorage, pulsa F12 en Google Chrome, ve a la pestaña Application, en el panel izquierdo busca "Local storage", selecciona el dominio: http://localhost:5173 y busca el key cart, contiene el arreglo con los datos de los items en el carrito

  // ¿El state en React es sincrono o es asincrono y porque?
  // El state es asincrono, significa que el state no se actualiza inmediatamente, puede tardar unos milisegundos. Otras funciones se pueden mandar a llamar cuando el state no ha sido modificado.

  return (
    <>
      {/* Pasa la función para eliminar producto, incrementar cantidad y todas las demás funciones al componente Header */}
      <Header cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((guitar) => (
              <Guitar
                key={guitar.id} guitar={guitar}
                cart={cart}
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