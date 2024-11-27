import './App.css'

function App() {

  return (
    <>
      {/* Titulo de prueba con 2 clases de Tailwind, coloca el cursor sobre la clase para ver las propiedades CSS aplicadas */}

      {/* text-lg -> texto grande */}
      {/* text-9xl -> texto bastante grande (8rem = 128px) */}
      {/* font-black -> texto en negrita */}
      {/* text-indigo-600 -> color de texto indigo */}
      {/* bg-indigo-600 -> color de fondo indigo */}

      <h1 className='text-9xl font-black text-indigo-600'>Hola mundo</h1>
      <p>Hola mundo 2</p>
    </>
  )
}

export default App
