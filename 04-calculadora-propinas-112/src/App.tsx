import MenuItem from './components/MenuItem';

// Importa los datos
import { menuItems } from './data/db'

function App() {

  // Prueba para imprimir los datos, en la consola imprime un Array
  console.log(menuItems);

  // Recordar que se imprime 2 veces, porque en el componente main se tiene habilitado el modo estricto <StrictMode>

  return (
    <>
      {/* Titulo de prueba con 3 clases de Tailwind, coloca el cursor sobre la clase para ver las propiedades CSS aplicadas */}

      {/* text-lg -> texto grande */}
      {/* text-9xl -> texto bastante grande (8rem = 128px) */}
      {/* font-black -> texto en negrita */}
      {/* text-indigo-600 -> color de texto indigo */}
      {/* bg-indigo-600 -> color de fondo indigo */}
      {/* py-5 -> espaciado en el eje y de 20px aprox. */}
      {/* text-center -> texto centrado horizontalmente */}
      {/* text-4xl -> tamaño de texto de 36px */}

      {/* <h1 className='text-9xl font-black text-indigo-600'>Hola mundo</h1>
      <p>Hola mundo 2</p> */}

      {/* header contenedor */}
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>Calculadora de Propinas y Consumo</h1>
      </header>

      {/* A diferencia de Boostrap, que desde una clase le cambia la apariencia bastante a tus elementos HTML, Tailwind aplica diferentes clases a tus elementos y cada uno de estos es una propiead CSS aplicada al elemento */}

      {/* main contenedor --> sección principal */}
      {/* max-w-7xl -> ancho maximo de 1280 px, similar a un Container en Bootstrap */}
      {/* mx-auto -> margenes en el eje x de forma automatica, centra el elemento */}
      {/* py-20 -> espaciado en el eje y de 80px aprox */}

      {/* DISEÑO DE CUADRICULA EN TAILWIND */}

      {/* grid -> define el diseño de cuadricula de CSS */}
      {/* grid-cols-2 -> define 2 columnas para la cuadricula*/}

      {/* MEDIAQUERIES EN TAILWIND CSS */}

      {/* md:grid-cols-2 -> aplica las 2 columnas a partir del tamaño md (768px) */}
      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        {/* Se recomienda que el contenido de un grid sea definido con divs */}

        {/* Aplica un espaciado en todas las direcciones */}
        <div className='p-5'>

          {/* Clases para el titulo: tamaño del texto y texto en negrita */}
          <h2 className='text-4xl font-black'>Menú</h2>

          {/* Aplica un espaciado de 3 unidades a cada uno de los elementos hijos y un margen superior de 40px */}
          <div className='space-y-3 mt-10'>
            {/* Itera con cada elemento del arreglo menuItems */}
            {menuItems.map(item => (
              // Renderiza el componente MenuItem por cada elemento del arreglo
              // No olvidar la propiedad key para asignar el id
              <MenuItem
                key={item.id}
                // Pasa la propiedad item, si muestra un error es porque no se ha definido el tipo de dato en el componente MenuItem
                item={item}
              />
            ))}
          </div>

        </div>

        <div>
          <h2>Consumo</h2>
        </div>

      </main>
    </>
  )
}

export default App
