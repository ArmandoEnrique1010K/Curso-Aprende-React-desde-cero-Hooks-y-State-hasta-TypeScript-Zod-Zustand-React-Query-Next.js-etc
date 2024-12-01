// El nombre puede llevar la siguiente sintaxis
// activityReducer.ts
// activity-reducer.ts

import { Activity } from "../types"

// Recordar que un reducer consta de diferentes partes

// Se definen las acciones, describe lo que esta sucediendo al modificar el state y que se va a modificar
export type ActivityActions = {

    // Una acción consta de 2 partes: type que es la descripción y el payload que es la información que modifica o agrega al state

    // Una vez que se envie el formulario, se guardara la actividad, por lo cual se define el type para que lo ejecute
    type: 'save-activity'

    // payload -> datos que se agregan al state, es un objeto que contiene un Activity
    payload: { newActivity: Activity }
}
// Recuerda que puedes utilizar el operador de unión (|) para definir el type para las demás acciones



// Type para el estado de Activity
type ActivityState = {
    // Tendra un arreglo de activivies, se asigna el tipo Activity para cada uno de los objetos contenidos en el arreglo
    activities: Activity[]
}

// Valor inicial del state, se asocia el type
export const initialState: ActivityState = {
    // Se inicializa con un arreglo vacio
    activities: []
}
// Puedes tener multiples elementos en el initialState, solamete requiere sincronzar los types en el type ActivityState


// La función de tipo reducer conecta a ambos, se definen los types para el state y el action
export const activityReducer = (
    // El state se obtiene desde ActivityState. Recuerda que typescript indica que sintaxis y que elementos son validos de acuerdo a la información definida
    state: ActivityState = initialState,
    // Se definen las acciones
    action: ActivityActions
) => {

    // Anteriormente cuando se trabajaba con reducers habia una sola sintaxis que era la de bloque switch, puedes hacerlo con un if

    // Si se llama a la acción de save-activity
    if (action.type === 'save-activity') {
        // Maneja la logica para actualizar el state
        // console.log('desde el type de save-activity')

        // Asi se pasa la información hacia el reducer, imprime en la consola el contenido ingresado en el formulario
        // console.log(action.payload.newActivity)

        // Retorna el estado actualizado
        return {
            // Copia del state para no perder la referencia anterior (siempre se recomienda hacerlo)
            ...state,
            // Utiliza Spread para no perder las actividades previas
            activities: [...state.activities, action.payload.newActivity]

            // Abre React Developers Tools, ve al componente App y ahi se tendra el reducer de activities, se agrega uno nuevo luego de enviar el formulario
        }
    }

    // Siempre se debe colocar un return para quitar el error de que state no se esta utilizando
    return state

}

// Un reducer te permite escribir multiples propiedades de tu state

// La gran ventaja de escribir todo el codigo es el autocompletado que sugiere actividades porque es lo unico que hay en el state
