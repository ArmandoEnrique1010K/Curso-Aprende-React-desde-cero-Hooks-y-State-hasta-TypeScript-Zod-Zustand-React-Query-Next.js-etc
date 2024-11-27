import { Header } from "./components/Header";
import { Guitar } from "./components/Guitar";
import { useCart } from "./hooks/useCart";
// import { useState } from "react";

function App() {

  const { data, cart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal } = useCart();

  // STATE EN TYPESCRIPT

  // State o estado en javascript
  // const [auth, setAuth] = useState(20);

  // Typescript infiere que auth sea de acuerdo al tipo de dato del valor inicial.

  // Si el nuevo valor no es el mismo tipo de dato que auth, muestra un error en VScode.
  // setAuth(false)

  // SINTAXIS ALTERNATIVA

  // Puedes colocar el tipo de dato, esto es algo redundante aunque no haya un valor inicial
  // const [auth, setAuth] = useState<number>(20);

  

  return (
    <>
      <Header cart={cart} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} clearCart={clearCart} isEmpty={isEmpty} cartTotal={cartTotal} />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {
            data.map((guitar) => (
              <Guitar
                key={guitar.id}
                guitar={guitar}

                // En el caso de funciones, coloca el cursor sobre la prop addToCart y aparece una sintaxis como "(item: any) => void". Copia la sintaxis y pegalo en el componente Guitar al recibir la prop addToCart

                // void es comun en Java, se utiliza si una función no retorna nada, como

                // Automaticamente desaparece el error si se especifica el tipo de dato en la prop del componente Guitar
                addToCart={addToCart}

                // Si intentas eliminas la prop addToCart para no pasarle, va a mostrar un error indicando que hace falta esa propiedad definida
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