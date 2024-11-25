export function Guitar({ guitar, cart, addToCart }) {

    const { id, name, image, description, price } = guitar

    // Recuerda que la logica va antes del return, crea una función y comprueba que existe un elemento en un arreglo

    // La siguiente funcion agrega el elemento al carrito, aunque ya exista en el carrito
    // const handleClick = (guitar) => {
    //     setCart([...cart, guitar])
    // }


    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">

            {/* El template es para presentar información, mostrar los componentes y no es para tener lógica */}

            <div className="col-4">
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">$ {price}</p>

                <button
                    type="button"
                    className="btn btn-dark w-100"
                    // La función de flecha llama a la función addToCart
                    // onClick={() => setCart(prevCart => [...prevCart, guitar])}
                    onClick={() => addToCart(guitar)}

                >Agregar al Carrito</button>
            </div>
        </div>
    )
}