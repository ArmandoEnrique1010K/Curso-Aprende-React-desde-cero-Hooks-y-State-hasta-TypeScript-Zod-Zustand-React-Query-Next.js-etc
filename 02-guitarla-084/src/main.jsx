import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Los proyectos de React, Angular o VueJs se tienen que construir luego de culminar el proyecto , el comando "npm run build" srive para realizar una serie de mejoras y subir una versión más ligera */}

    {/* Aparece la carpeta dist, y en la consola se tiene un resumen, genera el archivo index.html, una hoja de estilos y un archivo javascript que contiene el proyecto */}

    {/* ../img/header.jpg referenced in ../img/header.jpg didn't resolve at build time, it will remain unchanged to be resolved at runtime */}

    {/* Ese error indica que se tiene que cambiar la ruta a "/img/header.jpg" */}

    {/* Puedes volver a introducir el comando "npm run build" para aplicar los cambios realizados al culminar el proyecto */}

    {/* Ahora puedes subir la carpeta dist, no modifiques los archivos de la carpeta dist */}

    {/* Netlify permite subir proyectos en HTML, CSS, JS, React, VueJs, crea una nueva cuenta en Netlify */}

    {/* Ve al panel izquierdo, clic en "sites", ve a la sección inferior y ahi puedes arrastrar la carpeta dist, una vez subido, haz clic en el botón Open production deploy */}
    <App />
  </StrictMode>,
)