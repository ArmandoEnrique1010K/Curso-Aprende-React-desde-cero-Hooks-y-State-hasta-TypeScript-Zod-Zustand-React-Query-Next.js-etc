
// Escribe "rfc" y pulsa enter para generar la estructura basica de un componente, otras opciones se ven al escribir "rf"


// Instala las extensiones de VSCode ES7+React/Redux/React-Native snippets y Simple React Snippets si no funciona

// Por defecto genera utilizando siguiente sintaxis antigua

// Este import no es necesario
// import React from 'react'

// export default function MenuItem() {
//     return (
//         <div>MenuItem</div>
//     )

// }

/* */

// "rfcp" utiliza la sintaxis de PropTypes (no recomendado si utilizas TypeScript)

// import React from 'react'
// import PropTypes from 'prop-types'

// function MenuItem(props) {
//     return (
//         <div>MenuItem</div>
//     )
// }

// MenuItem.propTypes = {}

// export default MenuItem

/* */

// "rafc" crea la estructura con una función de flecha

// Este import no es necesario
// import React from 'react'

// export const MenuItem = () => {
//     return (
//         <div>MenuItem</div>
//     )
// }


// Importa el tipo de dato para el objeto MenuItem
import type { MenuItem } from "../types"

// Define el tipo de dato para las props que se reciben
type MenuItemProps = {
    item: MenuItem
}

// Recuerda que el tipo any nunca se debe utilizar, se muestra porque no se ha asignado el tipo de dato
export default function MenuItem({ item }: MenuItemProps) {

    return (
        <>
            {/* Muestra el nombre y el precio */}
            {/* Una buena práctica es añadir un evento (en este caso, onclick) solamente a elementos de tipo button (un botón) */}

            {/* border-2 -> ancho de borde 2px */}
            {/* border-teal-400 -> color de borde aguamarina */}
            {/* w-full -> ancho al 100% */}
            {/* p-3 -> espaciado de 12px en todas las direcciones */}

            {/* flex -> aplica el diseño de caja (display: flex) */}
            {/* justify-between -> justify-content: space-between  */}

            {/* hover:bg-teal-200 -> pseudoclase de CSS hover, aplica las clases cuando el usuario coloca el cursor sobre el elemento */}
            <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between">
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>

            </button>
        </>
    )

}

