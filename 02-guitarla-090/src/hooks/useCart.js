// Los hooks se nombran: use y el nombre de lo que trata el hook
// Utilizan la extensión .js y no .jsx porque un custom hook solamente contiene logica, para tener vista se recomienda tener otro componente
// Los hooks son funciones de javascript

// Recuerda importar los hooks y los datos en el arreglo db
import { useEffect, useMemo, useState } from "react";
import { db } from "../data/db";

export const useCart = () => {
  // Variables de ejemplo
  //   const auth = true;
  //   const carrito = [];
  // console.log("desde useCart...");
  // Agrega un return, usualmente debe ser un objeto, la ventaja es que el nombre de las funciones o variables de state van a ser el mismo nombre. Un arreglo retorna por posición y es más complicado acceder al elemento.
  //   return { auth, carrito };
  // De esa forma, la variable auth va a estar disponible en el custom hook
  // Las variables que no se colocan dentro del return se consideran no definidas, retornan undefined

  /* */

  // APLICANDO EL CUSTOM HOOK EN EL PROYECTO

  // Pega aqui todas las funciones desde App.jsx y realiza las importaciones necesarias
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(item) {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) return;

      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  function removeFromCart(id) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  function increaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setCart(updatedCart);
  }

  function decreaseQuantity(id) {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }

  function clearCart() {
    setCart([]);
  }

  // Aqui se coloca los states derivados, recuerda importar useMemo
  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  // Retorna los states y funciones necesarias
  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    // Tambien retorna los states personalizados
    isEmpty,
    cartTotal,
  };
};

// El hook tiene que ser exportable hacia otros componentes, puedes utilizar unas de estas formas o simplemente colocar un export al inicio de la función
// export default useCart;
// export {useCart}
