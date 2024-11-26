// HOOK USEMEMO

// Es un hook enfocado al perfomance porque evita que el codigo se ejecute si alguna de las dependencias que se ha definido en el useMemo no ha cambiado

// El hook requiere 2 argumentos, el primero es un factory que es una función y el segundo, un arreglo de dependencias, recordar que react hace un render completo en donde esta el state.

import { useMemo } from "react";

// Recibe la prop removeFromCart y las demás props
export function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart }) {

    // Sintaxis de useMemo

    // Cada vez que el carrito cambie, cuando se quite o agregue elementos, se ejecuta la función
    const isEmpty = useMemo(() => cart.length === 0, [cart]);

    // Aqui tambien se ejecuta un useMemo, cada vez que se agrega elementos se actualiza el total
    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0));

    // useMemo es un hook enfocado a perfomance, "cachea" los resultados entre renders, queda con datos fijos no tan dinamicos, en algunos casos se recomienda utilizar useMemo para trabajar con cache entre componentes

    return (
        <header className="py-5 header" >
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            {/* En la consola se imprimia una advertencia que decia que en lugar de utilizar la ruta de la carpeta "./public/img/...", se utiliza "/img..." */}
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            {/* En la consola se imprimia una advertencia que decia que en lugar de utilizar la ruta de la carpeta "./public/img/...", se utiliza "/img..." */}
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
                                {/* En cuanto a la sintaxis, como isEmpty ya no es una función, se eliminan los parentesis */}
                                {isEmpty ? (
                                    <p className="text-center">El carrito esta vacio</p>
                                ) : (
                                    <>
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
                                                {
                                                    cart.map(guitar => (
                                                        <tr key={guitar.id}>
                                                            <td>
                                                                <img className="img-fluid"
                                                                    src={`/img/${guitar.image}.jpg`}
                                                                    alt="imagen guitarra" />
                                                            </td>
                                                            <td>{guitar.name}</td>
                                                            <td className="fw-bold">
                                                                {guitar.price}
                                                            </td>
                                                            <td className="flex align-items-start gap-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    // Utiliza un callback para llamar a la función de decrementar la cantidad pasando el id
                                                                    onClick={() => decreaseQuantity(guitar.id)}

                                                                >
                                                                    -
                                                                </button>
                                                                {guitar.quantity}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    // Utiliza un callback para llamar a la función de incrementar la cantidad y pasa el id de la guitarra
                                                                    onClick={() => increaseQuantity(guitar.id)}
                                                                >
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    type="button"
                                                                    // Utiliza un callback para llamar a la función con el cuando se haga clic, pasa el id de la guitarra como argumento
                                                                    onClick={() => removeFromCart(guitar.id)}
                                                                >
                                                                    X
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))
                                                }
                                            </tbody>
                                        </table>
                                        {/* Recordar eliminar los parentesis porque se utiliza useMemo */}
                                        <p className="text-end">Total pagar: <span className="fw-bold">$ {cartTotal}</span></p>
                                    </>
                                )}
                                {/* Llama a la función para limpiar el carrito, al hacer clic en el botón (evento onClick)  */}
                                <button onClick={clearCart} className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        </header >
    )
}
