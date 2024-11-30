import Form from "./components/Form"

function App() {

  return (
    <>
      {/* <h1 className="text-6xl">
        Contador Caloria
      </h1> */}

      {/* Se añaden unos estilos de tailwind como el color de fondo y espaciado en el eje y */}
      <header className="bg-lime-600 py-3">
        {/* recuerda que flex y justify-between sirven para aplicar el formato de caja flex y alinea los elementos */}
        <div className="max-w-4xl mx-auto flex justify-between">
          {/* uppercase aplica el texto en mayusculas */}
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>

      {/* Section para el formulario */}
      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Renderiza el componente Form */}
          <Form />
        </div>
      </section>
    </>
  )
}

export default App
