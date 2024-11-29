import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />

    {/* DEPLOYMENT DEL PROYECTO */}

    {/* Abre una terminal, deten el proyecto si se esta ejecutando y escribe "npm run build". Recordar estar bien atento a los errores que pueden aparecer en la consola */}

    {/* Si todo sale bien genera una carpeta dist, toda esa carpeta se puede subir a Netlify para desplegar el proyecto */}

    {/* Inicia sesion en Netlify, ve a Sites, sube la carpeta arrastrandolo a Netlify, luego haz clic en el proyecto, pulsa el botón "Open production deploy" y se abre la pagina web */}
  </StrictMode>,
)
