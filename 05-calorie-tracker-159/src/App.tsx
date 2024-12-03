import { useEffect, useReducer } from "react"
import Form from "./components/Form"
import { activityReducer, initialState } from "./reducers/activity-reducer"
import ActivityList from "./components/ActivityList"
function App() {

  // Coloca el cursor sobre state para inferir en el tipo de dato
  // ActivityState
  const [state, dispatch] = useReducer(activityReducer, initialState)

  // useEffect que depende de state.activities para almacenar el state 
  useEffect(() => {
    // Utiliza localStorage para almacenar las actividades en el key "activities"
    localStorage.setItem('activities', JSON.stringify(state.activities))
  }, [state.activities])

  // Recuerda que para ver los datos almacenados en localStorage, pulsa F12 en Chrome, ve a la pestaña Application, en el panel izquierdo abre Local Storage y selecciona el dominio http://localhost:5173, observa los datos del key activities

  // Cuando se crea, edita o elimina una actividad queda almacenado activities, porque todo esta sincronizado con el state,

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
          {/* Recuerda que state contiene las actividades y el activeId, por lo tanto se pasa al formulario */}
          <Form dispatch={dispatch} state={state} />
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <ActivityList
          activities={state.activities}
          dispatch={dispatch}
        />
      </section>
    </>
  )
}

export default App
