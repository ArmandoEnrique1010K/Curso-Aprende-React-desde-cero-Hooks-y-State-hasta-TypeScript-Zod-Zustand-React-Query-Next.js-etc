import { useMemo } from "react";
import { useCart } from "../hooks/useCart";

export function Header({ cart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, isEmpty, cartTotal }) {

    // Se tiene el state derivado, se traslada al hook useCart las constantes isEmpty y cartTotal

    // Llama al hook personalizado y utiliza los states derivados (No funciona)
    // const { isEmpty, cartTotal } = useCart();

    // Con eso al agregar un producto al carrito, no lo agrega, porque los customs hooks funcionan como instancia de una clase, basicamente crea un carrito nuevo en App.jsx y luego crea uno nuevo en Header.jsx. Los 2 carritos no saben de la existencia uno del otro, no estan sincronizados.

    // En su lugar se tiene que pasar por props los states derivados desde el hook useCart hacia App.jsx y luego a Header.jsx

    // Una solución alternativa es con un administrador global del estado como Redux Toolkit, Zustand, Context API.

    // Toda la logica se mantiene en el custom hook

    return (
        <header className="py-5 header" >
            <div className="container-xl">
                <div className="row justify-content-center justify-content-md-between">
                    <div className="col-8 col-md-3">
                        <a href="index.html">
                            <img className="img-fluid" src="/img/logo.svg" alt="imagen logo" />
                        </a>
                    </div>
                    <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                        <div
                            className="carrito"
                        >
                            <img className="img-fluid" src="/img/carrito.png" alt="imagen carrito" />

                            <div id="carrito" className="bg-white p-3">
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
                                                                    onClick={() => decreaseQuantity(guitar.id)}

                                                                >
                                                                    -
                                                                </button>
                                                                {guitar.quantity}
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                    onClick={() => increaseQuantity(guitar.id)}
                                                                >
                                                                    +
                                                                </button>
                                                            </td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-danger"
                                                                    type="button"
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
                                        <p className="text-end">Total pagar: <span className="fw-bold">$ {cartTotal}</span></p>
                                    </>
                                )}
                                <button onClick={clearCart} className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        </header >
    )
}
