// JSX

// Es una extensión del lenguaje desarrollada por Meta para React.

// Parece JS pero muestra codigo HTML y basicamente es un lenguaje de Templates o de vista que muestra HTML pero tiene todas las funciones de JavaScript.

// Ten en cuenta que todo lo que hay en JS se puede utilizar en los archivos JSX como fechas, variables, arreglos, etc.

// Una vez compilado son archivos JS con funciones y objetos.

/* */

// REGLAS EN JSX

// A diferencia de HTML, que no es estricto, en JSX, si un elemento HTML tiene una etiqueta de apertura, tambien deberas tener tambien la de cierre.

// Las etiquetas de solo apertura como <img> o <input> deberán finalizar con "/>".

// Cada componente debe tener un return. Además debe haber máximo un solo elemento en el nivel máximo. Ejemplo: Un <div></div> que contenga todo el codigo.

/* */

// FRAGMENTOS EN REACT

// Al crear varios <div></div> se tendran elementos innecesarios, en su lugar se tendrá que utilizar un fragmento o fragment de React.

// Existen 3 formas de crear Fragments:

// <Fragment></Fragment>
// requiere lo siguiente: import { Fragment } from "react";

// <React.Fragment></React.Fragment> (requiere importar React)
// requiere lo siguiente: import React from "react";

// <></>
// No requiere de importaciones

/* */

// Recuerda que antes de la función principal se coloca las importaciones de librerias y/o componentes.

// Componente funcional exportable Header

// Lleva el termino export al inicio para que se pueda exportar hacia otros componentes
export function Header() {

    // Antes del return se coloca codigo javascript

    // const total = 1000;

    // Se muestra el valor en la consola

    // console.log(total);

    // Lo que se coloca en return se muestra en pantalla
    return (

        // Para renderizar el valor de la variable y mostrarla en la aplicación, se utiliza llaves:

        // Para retornar un solo elemento en el nivel máximo, se utiliza un contenedor, en este caso un fragment.
        //  <>
        //      <p>Total a pagar: {total}</p>
        //      <p>Segundo parrafo</p>
        //  </>

        // Se traslada aqui todo el contenido definido en la etiqueta <header></header>

        <header className="py-5 header" >
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="./public/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="./public/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                <p className="text-center">El carrito esta vacio</p>
                                <table className="w-100 table">
                                    <thead>
                                        <tr>
                                            <th>Imagen</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Cantidad</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img className="img-fluid" src="./public/img/guitarra_02.jpg" alt="imagen guitarra" />
                                            </td>
                                            <td>SRV</td>
                                            <td className="fw-bold">
                                                $299
                                            </td>
                                            <td className="flex align-items-start gap-4">
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                >
                                                    -
                                                </button>
                                                1
                                                <button
                                                    type="button"
                                                    className="btn btn-dark"
                                                >
                                                    +
                                                </button>
                                            </td>
                                            <td>
                                                <button
                                                    className="btn btn-danger"
                                                    type="button"
                                                >
                                                    X
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                                <p className="text-end">Total pagar: <span className="fw-bold">$899</span></p>
                                <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

/* EXPORTAR POR DEFECTO */

// Puedes colocar lo siguiente para hacer exportable el componente (solamente si no se ha colocado un export en la definición de la función)
// export default Header;