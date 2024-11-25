// RECIBIR PROPS EN EL COMPONENTE HIJO

// "props" es una palabra reservada en los componentes de React y existe ahi pase o no le pase la información a los componentes.
// export function Guitar(props) {

// Puedes utilizar desestructuración para extraer los nombres de las props
export function Guitar({ guitar, cart, setCart }) {

    // Un error es tener un solo state muy grande, la logica para modificar ese state seria muy grande. Otro error es tener varios states a la vez,


    // Solamente si no se aplica desestructuración

    // Imprime todas las props dentro de un objeto
    // console.log(props);

    // Imprime solamente una prop por su nombre
    // console.log(props.price);

    // Desestructura las propiedades del objeto que se recibe
    const { id, name, image, description, price } = guitar

    // Función para actualizar el estado de cart, al hacer clic en el botón, se recibe un argumento que es el objeto guitar
    const handleClick = (guitar) => {
        // Imprime un mensaje (solamente para pruebas)
        //console.log("Diste Click ...", guitar)

        // Llama a la función para actualizar el estado de cart sin persistencia (no almacena el nuevo elemento en el arreglo)
        // setCart([guitar]);

        // Para mantener la pesistencia, se setea que el carrito tenga una copia del carrito y luego el nuevo elemento
        setCart([...cart, guitar])

        // Ahora el carrito puede almacenar los productos
    }


    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                {/* En lugar de utilizar la ruta: "./public/img/guitarra_01.jpg", utiliza la siguiente ruta "/img/guitarra_01.jpg" */}

                {/* Utiliza un template String para el nombre dinamico de la imagen */}
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>

                {/* Realiza el mismo procedimiento con las demas props */}
                <p>{description}</p>
                {/* Muestra el valor de la prop price en la pantalla, el primer ejemplo es sin desestructuración */}
                {/* <p className="fw-black text-primary fs-3">$ {props.price}</p> */}

                {/* La propiedad price del objeto guitar, sin desestructurar el objeto guitar */}
                {/* <p className="fw-black text-primary fs-3">$ {guitar.price}</p> */}

                <p className="fw-black text-primary fs-3">$ {price}</p>

                {
                    /* EVENTOS EN REACT */

                    // La forma en que React maneja los eventos es muy similar a como lo hace JavaScript de forma nativa con algunos cambios.

                    // Los eventos son camelCase, es decir, en lugar de onchange se utiliza onChange, en lugar de onclick se utiliza onClick

                    // A diferencia de JS y HTML, donde se coloca el nombre de la función en un string en React (JSX) se utiliza la función entre llaves {}

                    // SINTAXIS

                    // HTML 
                    // <button onclick="getLatestOrders()">
                    //     Descargar pedidos
                    // </button>

                    // JSX
                    // <button onclick={getLatestOrders()}>
                    //     Descargar pedidos
                    // </button>

                    // Usualmente se recomienda que la función este definida dentro de un hook personalizado

                    // HTML 
                    // <form onclick="agregarCliente(); return false">
                    //     <button type="submit">Submit</button>
                    // </form>

                    // JSX
                    // <form onclick={handleSubmit}>
                    //     <button type="submit">Submit</button>
                    // </form>

                    // El nombre "handle" es una convención de React, en el caso de los eventos.

                }
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    // Evento onClick, al hacer clic, se realiza una acción como llamara a una función
                    // Se pasa el objeto guitar como argumento, se tiene que colocar un arrow function y luego el nombre de la función para que no se llame en automatico
                    // onClick={() => handleClick(guitar)}

                    // Otra forma, llama a la función para establecer el estado de forma directa
                    // onClick={() => setCart([...cart, guitar])}

                    // Tercera forma, utiliza una función de flecha para contener el estado anterior de cart y agregar el nuevo elemento
                    onClick={() => setCart(prevCart => [...prevCart, guitar])}

                >Agregar al Carrito</button>
            </div>
        </div>
    )
}