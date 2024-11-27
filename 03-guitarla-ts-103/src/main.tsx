import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* El comando "npm run build" sirve para construir el proyecto con todas las configuraciones de typescript a javascript y luego se puede subir la carpeta dist a Netlify*/}
  </StrictMode>,
)