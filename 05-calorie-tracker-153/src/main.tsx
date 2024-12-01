import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* Importa la dependencia UUID con el comando "npm i uuid", unique id */}

    {/* Luego importa los types para UUID con el comando "npm i --save-dev @types/uuid" */}

    {/* Instala la dependencia de hero icons con el comando "npm i @heroicons/react", es de los creadores de TailwindCSS */}
  </StrictMode>,
)
