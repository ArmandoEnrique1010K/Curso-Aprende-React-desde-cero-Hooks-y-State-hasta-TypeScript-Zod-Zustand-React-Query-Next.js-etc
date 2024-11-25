// Importa el hook useState de React
import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Guitar } from "./components/Guitar";

// Importa el arreglo de guitarras
import { db } from "./data/db";

function App() {

  // REACT HOOKS

  // Los hooks son la base de React. Permiten utilizar las diferentes funciones de React en tus componentes. React tiene una serie de Hooks pero también puedes crear los tuyos.

  // Los hooks están disponibles desde la versión 16.8, previo a ello se tenían que crear clases de JavaScript para crear y modificar el state, con los hooks no es necesario

  /* */

  // CATEGORÍAS DE HOOKS

  // Básicos: useState, useEffect, useContext

  // Adicionales: useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useInsertionEffect, useTransition, useDeferredValue, useId, useSyncExternalStore.

  /* */

  // CREAR HOOKS PERSONALIZADOS

  // También puedes crear tus propios Hooks, de esta forma podrás separar tu código en funciones reutilizables y sacar todo el beneficio de lo que React ofrece.

  // Ejemplo: useAuth();

  /* */

  // QUE ES EL STATE EN REACT

  // Es la pieza central de React

  // El estado o state es una variable con información relevante en la aplicación de React, algunas veces el state pertenece a un componente en especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes.

  // Piensa en el state como el resultado de alguna interacción en el sitio o aplicación web: el listado de clientes, la imagen a mostrar en una galeria, si un usuario esta autenticado o no.

  // El state es creado con el hook useState()

  /* */

  // SINTAXIS DE USESTATE

  // import { useState } from "react"

  // const [customer, setCustomer] = useState({});

  // En el ejemplo, se utiliza el state `customer` (la variable que almacenara la información) y la función `setCustomer` (sirve para modificar el state). Luego el valor inicial se establece como argumento de la función useState, en este caso se trata de un objeto vacio.

  // El valor inicial de un state puede ser un numero, arreglo, booleano, etc.
  // const [total, setTotal] = useState(0);
  // const [products, setProducts] = useState([]);
  // const [modal, setModal] = useState(false);

  /* */

  // REACT REACCIONA EN BASE AL STATE

  // Cada vez que el state cambia, la aplicación de React va a renderizar y actualizarse con esos cambios, no es necesario hacer nada más y la interfaz siempre estará sincronizada con el state.

  // Para modificar el state, se utiliza la función que se extrae cuando se declara el state en el componente.

  /* */

  // EL TERMINO SET EN REACT

  // La convensión en varios desarrolladores de React es que el nombre de la función comienza con "set". Funciona con cualquier otro nombre, pero se recomienda seguir la convensión.

  // const [auth, setAuth] = useState(auth);

  // Imprime el valor inicial si no se ha modificado el estado auth
  // console.log(auth)

  /* */

  // REACT DEVELOPER TOOLS

  // La extensión de Google Chrome, React Developer Tools te permite ver todos los states definidos por cada componente que se encuentra en la aplicación.Tambien esta disponible para el navegador Firefox.

  // Puedes instalarlo desde la Chrome Web Store, buscando la extensión por su nombre.Una vez instalado reinicia el navegador.

  // Abre las herramientas de desarrollo de Chrome(pulsa`F12`), ve a la pestaña `components` para visualizar el arbol de componentes de React.

  /* */

  // REGLAS DE LOS HOOKS EN REACT

  // Es comun llenarse de state y hooks en un componente de React.

  // Los hooks se colocan en la parte superior de los componentes de React.

  // No se deben colocar dentro de condicionales ni tampoco despues de un`return`.

  // Ejemplo no valido(el hook no se puede registrar en base a una condición porque la condición va a cambiar en cualquier momento):

  // if (auth){
  //   const [cart, setCart] = useState([]);
  // }

  // Los hooks no pueden estar dentro de un loop o bucle, ni dentro de una iteración como un`foreach`.Ni tampoco dentro de funciones.

  // function registrarHook() {
  //   const [cart, setCart] = useState([])
  // }

  /* */

  // ¿QUÉ ES USEEFFECT?

  // Es un hook comun, se utiliza en diferentes escenarios.

  // useEffect siempre es un callback, que dependiendo como lo declares va a realizar diferentes acciones.

  // Es el sustituto de lo que era antes componentDidMount() y componentDidUpdate, en versiones previas de React donde habian clases conocidas como metodos del ciclo de vida.

  /* */

  // SINTAXIS DEL HOOK USEEFFECT

  // import { useEffect } from "react";

  // useEffect(() => {
  //     console.log('El componente esta listo')
  // }, []);

  // Dentro del useEffect tiene un callback, se puede poner como función o función de flecha.Al final tiene un arreglo de dependencias.

  // Nota: Los mensajes en la consola se pueden imprimir 2 veces, debido a que esta habilitado el modo estricto en React, se encuentra en el componente main.jsx definido con: <StrictMode></StrictMode>.

  /* */

  // USOS DE USEEFFECT

  // Al ejecutarse automáticamente cuando el componente esta listo, es un buen lugar para colocar código para consultar una API o LocalStorage.

  // Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede actualizar el componente cuando ese cambio suceda.

  // Dependiendo del valor que pasamos en el array de dependencias(o no pasemos nada) el hook de useEffect hará algo diferente.

  // Si el arreglo de dependencias esta vacio, quiere decir que se va a ejecutar cuando el componente esté listo. Ejemplo:

  // const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //   console.log("Componente listo o escuchado por Auth");
  // }, [auth])

  // setTimeout(() => {
  //   setAuth(true)
  // }, 3000);

  // El codigo imprimira en la consola el mensaje, luego de establecer el valor inicial en el state auth (debido a que se encuentra en el arreglo de dependencias).Luego de 3 segundos, imprimira de nuevo el mensaje porque cambia el state mediante la función setAuth.

  // CONDICIÓN DENTRO DE UN USEEFFECT

  // Es posible colocar una condición dentro del callback del useEffect. Sirve en distintos escenarios.

  // const [auth, setAuth] = useState(false);

  // useEffect(() => {
  //     if (auth) {
  //         console.log("Autenticado")
  //     }
  // }, [auth])

  /* */

  // DEFINE UN ESTADO PARA ALMACENAR LA DATA

  // Imprime en la consola el arreglo de guitarras (solamente para pruebas)
  // console.log(db);

  // 1° Forma: Se establece un arreglo vacio como valor inicial en el caso de que no venga la data. Se recomienda utilizar esta forma en APIs.
  // const [data, setData] = useState([]);

  // Una vez que el componente este listo, se establece en el state la data
  // useEffect(() => {
  //   setData(db)
  // }, [])

  // 2° Forma: Como son datos estaticos, se establece el valor inicial de forma directa
  const [data, setData] = useState(db);

  // Crea un state para el carrito, el valor inicial es un arreglo
  // Recuerda que hay metodos en un arreglo para modificar el state
  const [cart, setCart] = useState([]);

  // La función setCart siempre va a estar asociada con el state de cart, no se mezcla con otras funciones



  /* */
  // Puedes verificar en React Developer Tools el estado de data con los datos como valor inicial

  // El valor inicial de un state que contiene data, en este contexto debe ser un arreglo vacio si se espera a que se tenga un arreglo con los datos. Tambien puede ser un boolean o un objeto dependiendo del contexto.

  // Para verificar el state de data, puedes imprimirlo en la consola
  console.log(data);

  /* */

  // STATEMENTS Y EXPRESSIONS

  // En JS hay varias formas de iterar con un arreglo con un for o forEach.

  // Antes del return se puede escribir statements o expresiones y dentro del return solamente se puede escribir expresiones

  // STATEMENTS

  // Una app de JS es una serie de statements, cada statement es una instrucción para hacer algo.

  // Algunos statements son: creación de variables, codigo condicional con if, lanzar errores con throw new Error(), iterar con while o for

  // EXPRESSIONS

  // Una expresion es algo que produce valor.

  // Algunos expressions son: ternarios, utilizar un Array Method que genere un nuevo Array, el metodo map que genera un nuevo array a diferencia de forEach

  return (
    <>

      <Header />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {/* Dentro del return se puede colocar Expressions, es comun utilizar el metodo map para iterar sobre un arreglo (el state data debe tratarse de un arreglo) */}

          {
            // Puedes omitir las llaves y el return en el metodo map. Se utiliza parentesis en lugar de llaves.

            // Retorna un componente por cada elemento en el arreglo data

            /* */

            // PROPS

            // Los componentes de React utilizan props para comunicarse entre ellos. Puedes pasarle información de un componente padre al hijo por medio de estos props

            // Los props se parecen a los atributos en HTML, pero puedes pasarle arrays, objetos o funciones

            // Los props se pasan del padre al hijo, nunca se pueden pasar del hijo al padre

            /* */

            // SINTAXIS DE PROPS

            // <Header nombreProp = { datos, state o funciones } />
            // <Users users = { users } setUsers = { setUsers } title = "Listado de usuarios" />

            /* */

            // LOS PROPS SE PASAN DESDE EL PADRE HACIA EL HIJO

            // Si tienes un state que se va a pasar por diferentes componentes, lo mejor es colocarlo en el archivo principal

            // Cada nivel de componentes debera tomar y pasar el prop hacia otros componentes, tecnologias como redux, Zustand, Jotai o Context evitan tener que hacerlo de esta forma

            /* */

            // PASAR PROPS AL COMPONENTE HIJO

            // Algunos dicen no puedes tener una propiedad con el mismo nombre de la variable que se va a pasar, pero es una buena practica para evitar confusiones

            // Recuerda que la prop guitar contiene un objeto de cada iteración del arreglo

            // Cada vez que se itere con un map, se tiene que pasar al componente un identificador unico para crear los componentes, la prop se llama key, el valor debe ser unico
            data.map((guitar) => (
              <Guitar
                key={guitar.id} guitar={guitar}
                cart={cart}
                setCart={setCart}
              />
            ))

            // Puedes pasar el state como una prop , en React Developer Tools se tendrá la función como una prop en cada componente hijo
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