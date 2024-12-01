import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity'
    payload: { newActivity: Activity }
}
    // El operador "|" sirve para añadir otro type para otra acción
    | {
        // Acción para editar la actividad, en el payload se pasa el id para la actividad que se va a editar
        type: 'set-activeId'
        payload: { id: Activity['id'] }
    }

type ActivityState = {
    activities: Activity[]
    // Se tiene que definir el tipo de dato
    activeId: Activity['id']
}

export const initialState: ActivityState = {
    activities: [],
    // Añade un nueva propiedad para el ID de la actividad seleccionada
    activeId: ''
}

export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        return {
            ...state,
            activities: [...state.activities, action.payload.newActivity]
        }

        // En React Developers Tools, revisa el componente Form, revisa el state de activity, se ve que se asigna un id de forma automatica

        // Ejemplo: baad4df7-f7be-40d9-a21b-dae8d6e28e30

        // Recuerda que cada vez que se guarda una actividad, se almacena en el reducer de activities (componente App)
    }

    // Añade una nueva acción para establecer el id de la actividad seleccionada
    if (action.type === 'set-activeId')

        // Recordar que siempre se debe retornar una copia del state para mantener las actividades previas que estaban guardadas
        return {
            ...state,
            // Recibe el id como payload
            activeId: action.payload.id
        }

    return state
}

