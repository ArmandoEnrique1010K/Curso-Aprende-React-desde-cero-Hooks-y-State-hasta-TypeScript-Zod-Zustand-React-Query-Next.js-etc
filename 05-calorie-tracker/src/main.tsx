import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* COMANDOS PARA CREAR EL PROYECTO */}
    {/*
      cd <<CARPETA DEL PROYECTO>>
      npm create vite@latest
      y
      05-calorie-tracker
      React
      TypeScript + SWC
      cd calorie-tracker
      npm install
    */}

    {/* LIMPIEZA DEL PROYECTO */}
    {/*
      En la carpeta raiz src, elimina la carpeta assets, App.css, en App.tsx elimina todo el contenido retornable y en index.css elimina todo el contenido
    */}

    {/* IMPORTAR TAILWIND */}

    {/* Escribe los siguientes comandos */}

    {/* npm i -D tailwindcss postcss autoprefixer */}
    {/* npm tailwindcss init -p */}

    {/* CONTINUA EN 0:38 */}
  </StrictMode>,
)
