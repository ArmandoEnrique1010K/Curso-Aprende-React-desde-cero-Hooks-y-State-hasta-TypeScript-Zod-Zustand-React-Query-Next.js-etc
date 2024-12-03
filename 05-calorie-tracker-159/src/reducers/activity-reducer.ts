import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity'
    payload: { newActivity: Activity }
} | {
    type: 'set-activeId'
    payload: { id: Activity['id'] }
}
    // Añade otro type para el caso de eliminar, requiere solamente el id
    | {
        type: 'delete-activity'
        payload: { id: Activity['id'] }
    }

// Hacia falta exportar esto para utilizarlo en el componente Form.tsx
export type ActivityState = {
    activities: Activity[]
    activeId: Activity['id']
}

// Aqui se tiene que tener un state inicial de localStorage, de tal manera que revise si se tiene algo, ese sera el valor inicial del arreglo vacio, de lo contrario un arreglo vacio

// Recuerda que JSON.parse sirve para convertir un string a un objeto de tipo JSON

// localStorage reside en el navegador, no en el codigo. VSCode no puede inferir en el tipo de dato, por lo cual se tiene que asignar manualmente, como se trata de un arreglo de Activity
const localStorageActivities = (): Activity[] => {
    const activities = localStorage.getItem('activities')
    return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState = {
    // Se llama a la función para obtener el state inicial en lugar de un arreglo vacio
    // activities: [],
    activities: localStorageActivities(),
    // Recuerda que este es el identificador de la actividad que se esta editando
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {

        // Al hacer una prueba en el navegador, pulsa el botón de editar actividad y se establece los datos en el formulario, pero al presionar el botón de guardar se crea una nueva actividad, lo ideal es reescribir el elemento

        // Dentro del return se coloca lo que se va a retornar

        // Variable de tipo Activity que contiene un arreglo
        let updateActivities: Activity[] = []

        // Si se tiene algo en activeId, se ejecuta el siguiente bloque

        // Puedes colocar un return en ambos casos de la condición, funciona esa sintaxis, pero por lo general se tiene un solo return por acción
        if (state.activeId) {
            // Este es el caso editar

            // Itera sobre las actividades para identificar el id del activeId y se pasa el nuevo payload
            updateActivities = state.activities.map(activity => activity.id === state.activeId ? action.payload.newActivity : activity)

            // Caso contrario, retorna esa actividad para no perder las demás
        } else {
            // Este es el caso crear, 
            updateActivities = [...state.activities, action.payload.newActivity]
        }

        // return {
        //     ...state,
        //     activities: [
        //         ...state.activities, action.payload.newActivity
        //     ]
        // }

        return {
            ...state,
            // Se utiliza updateActivities para verificar si se trata de una actividad que se esta editando o creando
            activities: updateActivities,
            // Esto se tiene que reiniciar despues de cada acción porque va a ser el mismo id y va a reescribir con la información del formulario cuando se trate de crear una nueva actividad luego de editar una
            activeId: ''
        }

        // La gran ventaja de useReducer es que permite escribir multiples states en una sola linea en un mismo return. A diferencia de useState, en el cual vas a tener que utilizar la función que modifica el state por cada vez que quieras escribir en diferentes partes del state.
    }

    if (action.type === 'set-activeId') {

        return {
            ...state,
            activeId: action.payload.id
        }
    }

    // Este es el caso eliminar
    if (action.type === 'delete-activity') {
        // Puedes utilizar una variable y utilizar un filter o hacerlo directamente
        return {
            // Siempre se retorna el state para no perder la información
            ...state,
            // Utiliza el metodo filter para filtrar todas las actividades a excepción de la actividad cuyo id se pasa por medio del payload
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        }
    }
    return state
}

