// Recibe el arreglo de items del carrito como prop
export function Header({ cart }) {

    // Un state derivado, en lugar de crear uno nuevo, se crea una función que dependa del state. La función retorna true o false.
    const isEmpty = () => cart.length === 0;

    // Un arreglo contiene el metodo reduce para calcular el total del carrito, devuelve un numero
    // Requiere 2 argumentos: 
    // - una función de flecha con 2 parametros: total (valor acumulado) e item (elemento actual)
    // - el valor inicial, 0
    const cartTotal = () => cart.reduce((total, item) => total + (item.quantity * item.price), 0);

    return (
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
                                {/* El mensaje se tiene que mostrar solamente si el carrito esta vacio, una solución es crear un state si el carrito esta vacio */}

                                {/* Otra solucion es utilizar la propiedad length para contar la cantidad de elementos de un arreglo y un operador tenario para mostrar el contenido de acuerdo a la condición

                                cart.length === 0 */}

                                {/* Llama a la función del state derivado */}
                                {isEmpty() ? (
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
                                                {/* Recordar que al crear varios componentes pequeños, lleva un problema donde se tiene varios archivos que se tiene que mantener y no es la mejor opción */}

                                                {/* Itera con el carrito de compras, de tal manera que ejecute todo el codigo que contiene la función */}

                                                {
                                                    cart.map(guitar => (
                                                        // No olvidar la prop key para el ID
                                                        <tr key={guitar.id}>
                                                            <td>
                                                                {/* La imagen de la guitarra */}
                                                                <img className="img-fluid"
                                                                    // src="./public/img/guitarra_02.jpg"
                                                                    src={`/img/${guitar.image}.jpg`}

                                                                    alt="imagen guitarra" />
                                                            </td>
                                                            {/* El nombre de la guitarra */}
                                                            <td>{guitar.name}</td>

                                                            {/* El precio de la guitarra */}
                                                            <td className="fw-bold">
                                                                {guitar.price}
                                                            </td>
                                                            <td className="flex align-items-start gap-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-dark"
                                                                >
                                                                    -
                                                                </button>
                                                                {/* Cantidad de items */}
                                                                {guitar.quantity}
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
                                                    ))
                                                }
                                            </tbody>
                                        </table>

                                        {/* Para no mostrar el total a pagar si el carrito esta vacio se utiliza fragmentos <></> para agrupar todo el contenido */}

                                        {/* Llama la función cartTotal para mostrar el total */}
                                        <p className="text-end">Total pagar: <span className="fw-bold">$ {cartTotal()}</span></p>
                                    </>

                                )}

                                <button className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div >
        </header >
    )
}
