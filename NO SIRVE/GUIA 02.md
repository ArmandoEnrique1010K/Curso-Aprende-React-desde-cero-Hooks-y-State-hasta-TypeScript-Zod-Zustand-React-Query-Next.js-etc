# Carrito de compras

## 46 - El Proyecto que vamos a construir

Colocar aqui una captura de pantalla del proyecto

## 47 - Herramientas para crear aplicaciones en React.js

### Crear una app en React en minutos

Existen muchas formas de crear una app en React, incluso tu puedes crear tu propio ambiente de desarrollo con herramientas como Babel, Parcel, Webpack, Vite, etc.

Pero tambien existen una gran cantidad de herramientas ya disponibles para crear aplicaciones en React en minutos sin conocer esta configuración.

### Ventajas de utilizar una herramienta ya existente

La mayoría de herramientas ya existentes para crear aplicaciones en React son estables y siguen un enfoque muy claro: No tener que preocuparte por la configuración.

Cada una de estas herramientas va desde básicas hasta avanzadas.

Requieren tener instalado Node.js (NPM) o YARN.

### Opciones modernas para crear apps en React

- Vite (por mayoria)

- Next.js

Otras:

- Remix Run

- Astro

### Recomendaciones por parte del equipo de React

El equipo de React ha mencionado en su documentación que recomiendan Next.js o Remix para nuevos proyectos.

¿Ya no se deben crear proyectos con vite?

Cuando creas proyectos con Vite tendrás que instalar dependencias para Routing, Consultas HTTP y más.

## 48 - Instalando Node y NPM

Omitir esa parte

## 49 - Creando el primer proyecto

Abre una nueva terminal (cmd o powershell) e introduce los siguientes comandos en orden para crear el proyecto:

- `cd <Ruta de la carpeta>`: Establece el directorio a la carpeta especificada.

- `npm create vite@latest`: Crea un proyecto con la ultima versión de vite (en el caso de instalar una dependencia, solamente escribre `y`).

- `Project name: 02-guitar-shop`: Nombre del proyecto

- `Framework: React`: Selecciona el framework de React

- `Variant: JavaScript + SWC`: Esta opción contiene el nuevo compilador más rapido y estable

- `cd 02-guitar-shop`: Ve a la carpeta del proyecto

- `npm install`: instala las dependencias que se encuentran en el archivo `package.json`

- `npm run dev`: ejecuta el proyecto, accede a la url `http://localhost:5173/` para visualizar la aplicación

En el archivo `package.json` se tienen las dependencias de desarrollo que se van a ir instalando a lo largo del proyecto.

## 53 - La Estructura de archivos de React

Estructura del proyecto

- Carpeta `public`: Archivos de acceso publico

- Carpeta `src`: Contiene todo el codigo fuente del proyecto como los componentes.
  
  - `eslintrc.config.js`: incluye las reglas integradas de sintaxis del codigo javascript, sirve para detectar problemas y errores.
  
  - `gitignore`: contiene una lista de archivos que se van a ignorar cuando se sube el proyecto en git.
  
  - `index.html`: Ten en cuenta que React es una libreria de JS, todo el codigo se inyecta en el elemento `<div id="root"></div>`. Se puede colocar enlaces de fuentes, archivos CSS o enlace de Bootstrap para los estilos. El titulo definido en la etiqueta `<title></title>` se aplica a toda la aplicación web.
  
  - `package.json`: versiones de las dependencias, al agregar más dependencias se colocan en dependencias de proyecto (depenedncies) o dependencias de desarrollo (devDependencies).
  
  - `README.md`: archivo que se agrega a github (esta escrito en formato markdown)
  
  - `vite.config.js`: configuraciones por defecto de vite.

## 59 - Introducción a los React Hooks

### ¿Que son los React Hooks o Hooks?

Los hooks son la base de React, te permiten utilizar las diferentes funciones de React en tus componentes. React tiene una serie de Hooks pero también puedes crear los tuyos.

Los hooks están disponibles desde la versión 16.8, previo a ello se tenían que crear Classes para crear y modificar el state, con los Hooks no es necesario

### Categorías de Hooks

Se dividen en: 

- **Básicos:** useState, useEffect, useContext

- **Adicionales:** useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useInsertionEffect, useTransition, useDeferredValue, useId, useSyncExternalStore.

### Crear tus propios Hooks

También puedes crear tus propios Hooks, de esta forma podrás separar tu código en funciones reutilizables y sacar todo el beneficio de lo que React ofrece.

**Ejemplo:** useAuth();

## 60 - ¿Qué es el State en React? y useState

### ¿Qué es el State en React?

El estado o state es una variable con información relevante en la aplicación de React, algunas veces el state pertenece a un componente en especifico o algunas veces deseas compartirlo a lo largo de diferentes componentes.

Piensa en el state como el resultado de alguna interacción en el sitio o aplicación web: el listado de clientes, la imagen a mostrar en una galeria, si un usuario esta autenticado o no.

El state es creado con el hook useState()

### Sintaxis

```jsx
import { useState } from "react"

const [customer, setCustomer] = useState({});
const [total, setTotal] = useState(0);
const [products, setProducts] = useState([]);
const [modal, setModal] = useState(false);
```

En el primer ejemplo, se utiliza el state `customer` (la variable que almacenara la información) y la función `setCustomer` (sirve para modificar el state). Luego el valor inicial se establece como argumento de la función useState, en el ejemplo, se trata de un objeto vacio.

### React reacciona en base al state

Cada vez que el state cambia, la aplicación de React va a renderizar y actualizarse con esos cambios, no es necesario hacer nada más y la interfaz siempre estará sincronizada con el state.

Para modificar el state, se utiliza la función que se extrae cuando se declara el state en el componente.

### React Developer Tools

La extensión de Google Chrome, React Developer Tools te permite ver todos los states definidos por cada componente que se encuentra en la aplicación. Tambien esta disponible para el navegador Firefox.

Puedes instalarlo desde la Chrome Web Store, buscando la extensión por su nombre. Una vez instalado reinicia el navegador.

Abre las herramientas de desarrollo de Chrome (pulsa `F12`), ve a la pestaña `components` para visualizar el arbol de componentes de React.

## 61 - Reglas de los hooks

- Es comun llenarse de state y hooks en un componente de React. 

- Los hooks se colocan en la parte superior de los componentes de React.

- No se deben colocar dentro de condicionales ni tampoco despues de un `return`. 

- Ejemplo no valido (el hook no se puede registrar en base a una condición porque la condición va a cambiar en cualquier momento):
  
  ```jsx
  if (auth){
   const [cart, setCart] = useState([]);
  }
  ```

- Los hooks no pueden estar dentro de un loop o bucle, ni dentro de una iteración como un `foreach`. Ni tampoco dentro de funciones.
  
  ```jsx
  function registrarHook() {
      const [cart, setCart] = useState([])
  }
  ```

## 62 - ¿Qué es useEffect?

Es un hook comun, se utiliza en diferentes escenarios.

useEffect siempre es un callback, que dependiendo como lo declares va a realizar diferentes acciones.

Es el sustituto de lo que era antes componentDidMount() y componentDidUpdate, en versiones previas de React donde habian clases conocidas como metodos del ciclo de vida.

### Sintaxis

```jsx
import { useEffect } from "react";

useEffect(() => {
    console.log('El componente esta listo')
}, []);
```

Dentro del useEffect tiene un callback, se puede poner como función o función de flecha. Al final tiene un arreglo de dependencias.

**Nota:** Los mensajes en la consola se pueden imprimir 2 veces, debido a que esta habilitado el modo estricto en React, se encuentra en el componente main.jsx definido con: `<StrictMode></StrictMode>`.

### Usos de useEffect

Al ejecutarse automáticamente cuando el componente esta listo, es un buen lugar para colocar código para consultar una API o LocalStorage.

Debido a que le podemos pasar una dependencia y estar escuchando por los cambios que sucedan en una variable, puede actualizar el componente cuando ese cambio suceda.

Dependiendo del valor que pasamos en el array de dependencias (o no pasemos nada) el hook de useEffect hará algo diferente.

Si el arreglo de dependencias esta vacio, quiere decir que se va a ejecutar cuando el componente esté listo.

Ejemplo:

```jsx
const [auth, setAuth] = useState(false);

useEffect(() => {
    console.log("Componente listo o escuchado por Auth");
}, [auth])

setTimeout(() => {
    setAuth(true)
}, 3000);
```

Este codigo imprimira en la consola el mensaje, luego de establecer el valor inicial en el state `auth` (debido a que se encuentra en el arreglo de dependencias). Luego de 3 segundos, imprimira de nuevo el mensaje porque cambia el state mediante la función `setAuth`.

### Condición dentro de un useEffect

Es posible colocar una condición dentro del callback del useEffect. Sirve en distintos escenarios.

```jsx
const [auth, setAuth] = useState(false);

useEffect(() => {
    if (auth) {
        console.log("Autenticado")
    }
}, [auth])
```
