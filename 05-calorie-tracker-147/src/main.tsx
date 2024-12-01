import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* HOOK USEREDUCER */}

    {/* useReducer es un hook de React que te permite agregar un reducer a tu componente */}

    {/* Es una alternativa a useState que se utiliza para manejar estados más complejos y transiciones de estado que involucran lógica más complicada. */}

    {/* Mientras que useState es perfecto para el manejo de estados simples, useReducer es más adecuado para situaciones donde el nuevo estado depende del estado anterior o cuando hay múltiples sub-valores o lógica condicional a considerar */}

    {/* */}

    {/* COMPOSICIÓN DE USEREDUCER */}

    {/* El hook useReducer toma 2 argumentos:
    
      - Reducer: una función que toma el estado actual y una acción, y devuelve un nuevo estado.
      
      - Estado inicial (initialState): El estado inicial del reducer

    */}

    {/* const[state, dispatch] = useReducer(reducer, initialState) */}

    {/* */}

    {/* ALGUNOS TERMINOS CUANDO TRABAJAS CON USEREDUCER */}

    {/* state -> es el valor del estado cuya lógica se maneja dentro del Reducer */}

    {/* initialState -> es el state inicial con el que es creado el reducer, este initialState es similar a los valores de inicio de useState */}

    {/* actions -> las acciones son las funciones que manejan toda la lógica para modificar tu state */}

    {/* payload -> es la información que modifica tu state */}

    {/* dispatch -> es la función que manda llamar la acción con el payload */}


  </StrictMode>,
)
