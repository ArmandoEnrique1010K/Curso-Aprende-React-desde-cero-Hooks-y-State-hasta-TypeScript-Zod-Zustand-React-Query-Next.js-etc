import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* RESUMEN DE COMANDOS PARA CREAR EL PROYECTO */}

    {/*
      cd <<Ruta de la carpeta>>

      npm create vite@latest

      y

      04-calculadora-propinas

      React

      TypeScript + SWC

      cd 04-calculadora-propinas

      npm install
      
    */}

    {/* LIMPIEZA DEL PROYECTO */}

    {/* Elimina los archivos vite.svg de la carpeta public, en la carpeta src, la carpeta assets, App.css y todo el contenido de App.tsx e index.css */}

    {/* */}

    {/* TAILWIND CSS */}

    {/* Framework CSS básado en utilidades */}

    {/* A diferencia de Bootstrap donde una clase contiene diferentes propiedades de CSS, en Tailwind CSS cada clase es una propiedad de CSS con un nombre similar. */}

    {/* */}

    {/* VENTAJAS DE TAILWIND CSS */}

    {/* Su ventaja principal es que escribes el código CSS en tus componentes sin hojas externas */}

    {/* Tampoco es necesario preocuparte por la herencia en CSS */}

    {/* El como nombrar tus classes tampoco es un problema */}

    {/* Excelente documentación: https://tailwindcss.com/*/}

    {/* La extensión de VSCode es excelente para el autocompletado */}

    {/* */}

    {/* INSTALACIÓN DE TAILWIND EN EL PROYECTO */}

    {/* Tailwind CSS soporta diferentes frameworks (sección Framework Guides) como angular, next.js, vite, etc. Este proyecto  utiliza vite */}

    {/* Abre una nueva terminal e introduce el comando "npm install -D tailwindcss postcss autoprefixer" */}

    {/* Luego introduce el comando "npx tailwindcss init -p", este comando crea un par de archivos: postcss.config.js y tailwind.config.js */}

    {/* En la documentación se enecuntra un codigo que debe ser pegado en el archivo tailwind.config.js */}

    {
      // content: [
      // "./index.html",
      // "./src/**/*.{js, ts, jsx, tsx}",
      // ],
    }

    {/* El codigo especifica en que archivos va a encontrar codigo HTML que tendran clases de tailwind css, unicamente toma las clases del framework que se han utilizado y crear una hoja de estilos cuando se construya el proyecto */}

    {/* No es como Bootstrap, una sola descarga de 10000 lineas de codigo, en este caso Tailwind CSS es el modo Justinmind, solamente las clases utilizadas se aplicaran en la hoja de estilos final */}

    {/* https://tailwindcss.com/docs/installation */}

    {/* Ahora abre la hoja de estilos index.css y pega las directivas de tailwind */}

    {/* Puedes volver a ejecutar el proyecto para ver los cambios realizados en el proyecto con los estilos css, quita la apariencia por defecto de los elementos HTML */}

    {/* EXTENSIONES DE TAILWIND PARA VSCODE */}

    {/* Tailwind CSS intelliSense: Muestra una lista de clases de tailwind CSS al momento de implementarla en un className */}
  </StrictMode>,
)
