// COMPONENTES DE REACT

// React utiliza componentes para la creación de aplicaciones y sitios web.

// JSX - sintaxis que combina HTML con codigo JS en un solo archivo, es propio de React.

// Un componente tiene 2 propositos:
// - Ser reutilizable
// - Separar la funcionalidad
// No necesariamente deben cumplirse ambos propositos.

// No se recomienda crear componentes ni tan grandes ni tan pequeños.

/* */

// IMPORTAR ENTRE COMPONENTES

// Para importar un componente se utiliza la sintaxis de JS con import, por ejemplo:

// import reactLogo from './assets/react.svg' ---> El archivo se encuentra en la carpeta src/assets (imagenes que se van a modificar)
// import viteLogo from '/vite.svg' ---> El archivo se encuentra en la carpeta public (imagenes estaticas)

// Llamar a la imagen importada:
// <img src={viteLogo} className="logo" alt="Vite logo" />

/* */

// SINTAXIS DE UN COMPONENTE

// Este archivo App.jsx es un componente funcional porque esta definido con una funcion de javascript. 

// Los nombres de los componentes inician con mayusculas.

// Un componente lleva la extensión .jsx o .tsx (actualmente no se recomienda que tenga la extensión .js)

// El contenido solamente va a estar disponible en este componente, además se puede pasar datos, valores y funciones hacia otros componentes por medio de las props (properties).

// Un componente devuelve contenido HTML, siempre va a tener un return, que contiene todo lo que se va a mostrar en pantalla.

// Lo que esta antes del return, representa el cuerpo de la función del componente.

// Algunos componentes pueden tener estilos css propios, llevan el mismo nombre que el componente, por ejemplo: App.jsx
// import './App.css'

/* */

// CREAR UN COMPONENTE

// Los nombres de los componentes empienzan con mayuscula.

// Se recomienda que el nombre de la función principal del componente lleve el mismo nombre que el componente.

// Por ejemplo: Si el componente se llama Header.jsx, el nombre de la función principal debe ser Header.

// Se recomienda crear una carpeta llamada "components", en el cual se almacenaran los componentes.

/* */

// IMPORTAR UN COMPONENTE

// Recuerda que todo modulo que se importa se tiene que utilizar en este componente.
import { Header } from "./components/Header"
import { Guitar } from "./components/Guitar"

/* */

// EL COMPONENTE PRINCIPAL APP

// Este componente representa el punto inicial de la aplicación
function App() {

  return (
    <>

      {/* FORMAS PARA MONTAR O RENDERIZAR UN COMPONENTE */}

      {/* Existen 2 formas de renderizarlo */}
      {/* <Header></Header>*/}
      {/* <Header /> */}

      {/* Los componentes se pueden renderizar multiples veces, todo cambio hecho en el componente Header se aplica */}
      {/* <Header /> */}
      {/* <Header /> */}
      {/* <Header /> */}

      <Header />

      {/* */}

      {/* CLASSNAME EN LUGAR DE CLASS */}

      {/* Para evitar el error de "Invalid DOM property `class`" */}
      {/* Se utiliza className en lugar de class, porque class es una palabra reservada en JavaScript, se conecta automaticamente a los estilos CSS definidos */}
      {/* En React se utiliza HTML semantico */}

      {/* En VSCode, puedes ir al panel izquierdo, clic en el icono de Search, y escribe "class" para reemplazarlo por "className" (sección Replace). Puedes hacer clic derecho en un archivo de los resultados de busqueda y seleccionar Dismiss para omitir ese archivo */}

      {/* Cuando el proyecto se compila, se elimina el className y se reemplaza por class */}

      {/* */}

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        {/* Ten en cuenta que no se traslada el siguiente <div></div> contenedor*/}
        <div className="row mt-5">
          {/* Se renderiza el componente Guitar varias veces */}
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