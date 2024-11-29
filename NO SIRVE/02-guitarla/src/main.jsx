import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* ¿QUE ES TYPESCRIPT */}

    {/* TypeScript es un lenguaje de programación de código abierto desarrollado y mantenido por Microsoft. Es un superconjunto tipado de JavaScript, lo que significa que cualquier codigo JavaScript válido también es código TypeScript válido */}

    {/* La principal caracteristica de TypeScript es que agrega un sistema de tipos estático a JavaScript, lo que permite detectar errores y proporcionar herramientas de desarrollo más sólidas */}

    {/* */}

    {/* VENTAJAS DE AÑADIR TYPESCRIPT */}

    {/* El sistema de tipos de TypeScript permite al programador especificar los tipos de variables, parámetros de función, valores de retorno y más. Esto brinda la capacidad de realizar comprobaciones de tipos durante la compilación y detectar posibles errores antes de que el código se ejecute */}

    {/* */}

    {/* TYPESCRIPT Y JAVASCRIPT / REACT */}

    {/* Una vez que se ha escrito el código TypeScript, este se compila a JavaScript */}

    {/* React y vite incluyen soporte a TypeScript, lo que ayuda bastante en el desarrollo de proyectos, y una vez listo podemos construir el proyecto, se compila a JavaScript y se puede acceder a él */}

    {/* Y hoy en día TypeScript se ha convertido en un estándar para crear aplicaciones React, Angular o Vue.js. En una entrevista de trabajo estarás muy por delante de otros Devs. */}

    {/* */}

    {/* CREAR UN NUEVO PROYECTO CON VITE */}

    {/* Introduce los siguientes comandos en una terminal powershell o cmd */}

    {/*

      cd <<Carpeta de proyectos>>

      npm create vite@latest

      Proyect name: 03-guitarla-ts

      Framework: React

      Variant: TypeScript + SWC <-- Compilador nuevo

      cd 03-guitarla-ts

      npm install <-- instala las dependencias, incluyendo Typescript
    */}

    {/* Luego arrastra la carpeta del proyecto hacia VSCode */}

    {/* */}

    {/* ESTRUCTURA DEL PROYECTO */}

    {/* Basicamente es la  */}
  </StrictMode>,
)