// LIBRERIAS DE REACT

// En el componente main.jsx se importan estas 2 librerias separadas:
// React - Es una libreria ligera, incluye los hooks.
// React DOM - permite integrar el codigo como HTML

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/* */

// ESTILOS CSS EN REACT

// Importa la hoja de estilos index.css (se encuentra dentro de src), en este contexto, se aplica un estilo global, los estilos se aplican a todo el proyecto.
import './index.css'

// Recuerda que vite permite incorporar imagenes, archivos de JS y archivos CSS.

/* */

// FORMAS DE INCLUIR ESTILOS CSS EN REACT

// En React hay muchas formas y opciones de escribir codigo CSS:

// CSS Plano: Transfiere un proyecto hecho con HTML y CSS a un proyecto de React.

// SASS: Vite soporta el preprocesador CSS, genera automaticamente hoja de estilos.

// Modulos CSS: 

// Librerias basadas en componentes:

// Framework CSS: Permite incluir un framework como Bootstrap o Tailwind CSS.

// Styled Components: Basicamente es crear componentes que tienen un diseño en CSS.

// Se recomienda solamente utilizar una sola forma de integrar estilos CSS y mantenerse a lo largo de todo el proyecto. 
// No existe una mejor o peor opcion, cualquiera puede realizar desde un proyecto simple hasta uno muy grande.

/* */

// LA PUERTA DE ENTRADA A LA APLICACIÓN

// En este componente, obtiene el elemento <div id="root"></div> y monta o renderiza toda la aplicacion de React en ese elemento.
createRoot(document.getElementById('root')).render(
  // StrictMode - este componente activa el modo estricto de desarrollo (puede imprimir en la consola 2 veces el mismo mensaje definido con console.log)
  <StrictMode>
    {/* Componente principal de la aplicación */}
    <App />
  </StrictMode>,
)