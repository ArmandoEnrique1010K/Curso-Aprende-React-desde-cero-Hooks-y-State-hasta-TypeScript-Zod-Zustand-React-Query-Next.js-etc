import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import './index.css'

// SOLUCIONAR EL ERROR

// Cambiar getElementById por un querySelector no soluciona el problema
// createRoot(document.querySelector('#root')).render(

// Coloca aqui el operador assertion not null (!) para que el tipo de dato no sea un null y no se muestre un error
createRoot(document.getElementById('root')!).render(
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

    {/* Basicamente es la misma estructura que un proyecto con JavaScript, excepto que hay unos archivos nuevos: tsconfig.json y tsconfig.node.json, estos 2 archivos son configuraciones de TypeScript, permiten pasar ciertas reglas. Una vez compilado el codigo en base a las reglas definidas (como la versión de JS), no se recomienda modificar los archivos de configuración */}

    {/* Los archivos tienen la extensión .tsx, es la versión para TypeScript */}

    {/* */}

    {/* TRAER EL PROYECTO HECHO EN JAVASCRIPT A ESTE PROYECTO */}

    {/* Elimina todos los archivos que se encuentran en la carpeta public. Copia todos los archivos del proyecto anterior que se encuentran en la carpeta public y pegala dentro de esta carpeta public. Realiza el mismo procedimiento con la carpeta src */}

    {/* Cambia la extensión de todos los archivos tipo "jsx" a "tsx" y "js" a "ts" */}

    {/* El error que suele aparecer esta relacionado con los parametros que toman los componentes (props). TypeScript sirve para definir el tipo de dato o que se pasa a los componentes */}
  </StrictMode>,
)

{/* INFERENCIA CON EL TIPO DE DATO */}

// TypeScript infiere en el tipo de dato, en este caso se trata de un HTMLElement o puede ser un null (coloca el cursor sobre la variable "div" para ver el tipo de dato)
// const div = document.getElementById("root");

// Para que no sea un null, se coloca el termino "as" para colocar el tipo de dato, aunque esto no es una buena practica porque se "engaña" a TypeScript a nivel de "confiabilidad" con el tipo de dato
// const div = document.getElementById("root") as HTMLElement;

// Otra forma es colocar un signo de exclamación (!), tambien llamado operator assertion not null, el operador sirve para que no pueda inferir que sea un null
// const div = document.getElementById("root")!

// La inferencia es el proceso por el cual se derivan conclusiones a partir de premisas o hipótesis iniciales.

{/* EJECUCIÓN DEL PROYECTO */}

// Aunque se muestren errores en el codigo, respecto a los archivos tsx y ts, la aplicación se ejecuta correctamente

{/* PRIMITIVE TYPES */}

// Son los tipos de datos que soporta TypeScript de forma nativa.

// Estos son: number, string, boolean, null y undefined

// En el caso de arrays hay una sintaxis especial para crearlos 