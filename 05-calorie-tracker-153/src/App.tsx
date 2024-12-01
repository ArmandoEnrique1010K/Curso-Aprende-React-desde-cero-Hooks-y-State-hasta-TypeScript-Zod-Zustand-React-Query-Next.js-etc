import { useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
function App() {

  const [state, dispatch] = useReducer(activityReducer, initialState)

  // Imprime el state para ver las actividades
  // console.log(state)

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
          <Form dispatch={dispatch} />
        </div>
      </section>

      {/* Sección para las actividades */}
      <section className="p-10 mx-auto max-w-4xl">
        {/* Renderiza ActivityList y pasale el state (especificamente activities del objeto state) */}

        {/* Se necesita pasar el dispatch para la acción de obtener el id del producto seleccionado. Dispatch es el momento exacto en el cual se va a escribir ese state y siempre se utiliza en los componentes */}
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />

        {/* Puedes tener multiples reducers y cada uno puede tener su propio dispatch */}
      </section>
    </>
  )
}

export default App
