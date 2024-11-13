// Se importa el hook useState de React
import { useState } from "react"

import { Header } from "./components/Header"
import { Guitar } from "./components/Guitar"

function App() {
  // REACT HOOKS

  // Los hooks son la base de React.

  // Permiten utilizar las funciones de React en los componente. Puedes crear tus propios hooks.

  // Estan disponibles desde la versión 16.8, antes se tenian que crear clases para crear y modificar el state, con los hooks no es necesario

  // TIPOS DE HOOKS

  // Se dividen en: 

  // Básicos: useState, useEffect, useContext

  // Adicionales: useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useInsertionEffect, useTransition, useDeferredValue, useId, useSyncExternalStore.

  // CREAR HOOKS PERSONALIZADOS

  // Tambien puedes crear tus propios Hooks, de esta forma podrás separar tu código en funciones reutilizables y sacar todo el beneficio de lo que React ofrece.

  // Ejemplo: useAuth();

  // STATE EN REACT

  // Es la pieza central de React

  // El estado o state es una variable con información relevante en la aplicación de React, algunas veces el state pertenece a un componente en especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes.

  // El state se ve como el resultado de alguna interacción en el sitio o aplicación web: el listado de clientes, la imagen a mostrar en una galeria, si un usuario esta autenticado o no.

  // El state es creado con el hook useState()

  // SINTAXIS DE USESTATE

  // Se importa useState de React
  // import { useState } from "react"

  // Se utiliza un arreglo desestructurado como constante para almacenar el state.
  // const [customer, setCustomer] = useState({});

  // En este caso se utiliza el state customer (la variable que almacenara la función) y la función setCustomer (sirve para modificar el state). Luego el valor inicial se establece como argumento de la función useState, en este caso se trata de un objeto.

  // El valor inicial puede ser un numero, arreglo, booleano, etc.
  // const [total, setTotal] = useState(0);
  // const [products, setProducts] = useState([]);
  // const [modal, setModal] = useState(false);

  // REACT REACCIONA EN BASE AL STATE

  // Cada vez que el state cambia, la aplicación de React va a renderizar y actualizarse con esos cambios, no es necesario hacer nada más y la interfaz siempre estará sincronizada con el state.

  // Para modificar el state, se utiliza la función que se extrae cuando se declara el state en el componente.

  /* */

  // DEFINE EL STATE auth

  // La convensión en varios desarrolladores de React es que el nombre de la función comienza con "set". Funciona con cualquier otro nombre, pero se recomienda seguir la convensión.
  const [auth, setAuth] = useState(auth);

  // Imprime el valor inicial si no se ha modificado el estado auth
  // console.log(auth)


  /* */

  // REACT DEVELOPER TOOLS

  // La extensión de Google Chrome, React Developer Tools te permite ver todos los states definidos por cada componente que se encuentra en la aplicación.

  // Tambien esta disponible para el navegador Firefox

  // Una vez instalado reinicia el navegador.

  // Abre las herramientas de desarrollo de Chrome (pulsa F12), ve a la pestaña components para visualizar el arbol de componentes de React.

  /* */

  // REGLAS DE LOS HOOKS EN REACT

  // Es comun llenarse de state y hooks en un componente de React

  // Los hook se colocan en la parte superior de los componentes de React.

  // No se deben colocar dentro de condicionales ni tampoco despues de un return.

  // Ejemplo no valido:
  // if (auth){
  //   const [cart, setCart] = useState([]);
  // }

  return (
    <>

      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          <Guitar />
          <Guitar />
          <Guitar />
          <Guitar />
          <Guitar />
          <Guitar />
          <Guitar />
          <Guitar />
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