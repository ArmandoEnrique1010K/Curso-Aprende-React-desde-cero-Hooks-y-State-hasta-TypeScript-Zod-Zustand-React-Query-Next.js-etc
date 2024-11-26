import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* CREAR TUS PROPIOS HOOKS */}

    {/* Existe una gran ventaja de crear tus propios Hooks y es la de incorporar State y otros Hooks de React a tu propio código para poderlo re-utilizar en otros proyectos. */}

    {/* Otra gran ventaja es la de organizar tu código, de esa forma, el hook se encarga de toda la lógica del state mientras que tus componentes solo de mostrar la información */}

    {/* VENTAJA DE CREAR TUS PROPIOS HOOKS */}

    {/* Tu código personalizado tendrá todas las ventajas de React como son: state, effects, integrar otros hooks y el perfomance */}

    {/* Re-utilizable en otros proyectos y facil de escribir pruebas */}

    {/* COMO CRAR TUS PROPIOS HOOKS */}

    {/* Los hooks son funciones de JavaScript pero tienen algunas reglas */}

    {/* Tus hooks deben seguir la convención de react use{hook} de esta forma React escanea tu código en búsqueda de posibles problemas con las reglas de los Hooks */}

    {/* Un hook usualmente solo debe tener lógica y no presentación (para eso es un componente) */}

    {/* UBICACIÓN DE LOS HOOKS PERSONALIZADOS */}

    {/* Se colocan dentro de una carpeta llamada hooks */}
  </StrictMode>,
)