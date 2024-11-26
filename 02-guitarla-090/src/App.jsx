// Se eliminan las importaciones innecesarias

import { Header } from "./components/Header";
import { Guitar } from "./components/Guitar";
import { useCart } from "./hooks/useCart";

function App() {

  // Llama al hook personalizado, desestructura el objeto devuelto por el hook
  // const { auth, carrito } = useCart();
  // console.log(carrito);

  // Corta todo el contenido desde las definiciones de las funciones initialCart hasta clearCart y pegalo dentro de la función principal de useCart

  // Importa y llama al hook personalizado useCart

  // Tambien se incluyen los states derivados
  const { data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart();

  // Toda la logica del componente fue movido al hook useCart, todo funciona correctamente

  return (
    <>
      {/* Pasa los statres derivados al componente Header */}
      <Header cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart} isEmpty={isEmpty} cartTotal={cartTotal} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((guitar) => (
              <Guitar
                key={guitar.id}
                guitar={guitar}
                // No se utiliza la prop cart, por lo que se elimina
                // cart={cart}
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