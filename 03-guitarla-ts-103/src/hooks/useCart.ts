import { useEffect, useMemo, useState } from "react";
import { db } from "../data/db";

// Importa el tipo de dato Guitar y CartItem
import type {Guitar, CartItem} from "../types/index";

export const useCart = () => {

  // Especifica el tipo de dato de initialCart a un CartItem[]

  // Recordar que se utiliza CartItem en lugar de Guitar porque Guitar no tiene un campo quantity
  const initialCart = () : CartItem[] => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(db);

  // Recuerda que any es cualquier dato, una mala practica en TypeScript
  // Aqui se utiliza el valor devuelto por la función initialCart
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // En el parametro item, para especificar el tipo de dato se utiliza el type Guitar
  function addToCart(item: Guitar) {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity >= MAX_ITEMS) return;

      const updatedCart = [...cart];
      updatedCart[itemExists].quantity++;
      setCart(updatedCart);
    } else {
      // Modifica esta parte para tomar el item y agregarlo a la cantidad y luego convertirlo a un CartItem, la solución es crear una variable que va a crear un nuevo objeto 
      const newItem : CartItem = {...item, quantity : 1}

      // En lugar de agregar una nueva propiedad al objeto item
      // item.quantity = 1;
      //setCart([...cart, item]);

      // Setea en el carrito el nuevo item
      setCart([...cart, newItem]);

      // En conclusión, se "castea", toma un tipo de dato y lo convierte a otro, es comun en lenguajes fuertemente tipado como Java
    }
  }

  // Una solución es asignar el tipo number
  // function removeFromCart(id: number) {

  // Pero en el caso de usar una base de dato como MySQL, PostgreSQL o MongoDB que utiliza Strings, se tendria que cambiar en el archivo index.ts <---

  // Otra solución es utilizar un lookup para tomar solamente la propiedad id del objeto Guitar
  function removeFromCart(id: Guitar['id']) {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  // Realiza el mismo procedimiento con los demás parametros
  function increaseQuantity(id: Guitar['id']) {
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

  function decreaseQuantity(id: Guitar['id']) {
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

  const isEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  // Recuerda que typescript infiere en el tipo de dato, coloca el cursor sobre las siguientes propiedades para observar el tipo de dato, ninguno deberia tener un any
  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
};
