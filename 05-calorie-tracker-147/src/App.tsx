// Importa el hook useReducer en el componente principal
import { useReducer } from "react"
import Form from "./components/Form"
// Importa la función activityReducer e initialState de reducers
import { activityReducer, initialState } from "./reducers/activity-reducer"
function App() {

  // Aplica la sintaxis de useReducer
  const [state, dispatch] = useReducer(activityReducer, initialState)

  // dispatch es una función especial para ejecutar las acciones

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de calorias
          </h1>
        </div>
      </header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          {/* Pasale el dispatch como prop */}
          {/* El tipo de dato es: React.DispatchWithoutAction */}
          <Form dispatch={dispatch} />
        </div>
      </section>
    </>
  )
}

export default App
