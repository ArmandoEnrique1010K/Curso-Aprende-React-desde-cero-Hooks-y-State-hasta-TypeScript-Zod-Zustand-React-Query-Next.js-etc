// CONVERTIR PROPS HACIA TYPESCRIPT

// INLINE TYPE

// Primero importa los tipos de datos, en este caso para un Guitar 
type Guitar = {
  id: number,
  name: string,
  image: string,
  description: string,
  price: number
} 

// Coloca dos puntos luego de la desestructuración para especificar el tipo de dato de cada prop

// La sintaxis para la función addToCart es (item: any) => void, recuerda que void se utiliza si la función no retorna nada. Reemplaza any por el tipo de dato del parametro item (se utiliza en la definición de la función), en este caso, Guitar.
// 
// export function Guitar({ guitar, addToCart } : {
//     guitar: Guitar, 
//     addToCart: (item: Guitar) => void
// }) {

// TYPE SEPARADO

// Utiliza la siguiente sintaxis, con type o interface
type GuitarProps = {
    guitar: Guitar, 
    addToCart: (item: Guitar) => void
}

// Es una sintaxis más comoda, un type separado, menos probable de cometer errores

// Asigna el tipo de dato GuitarProps a las props que se reciben
export function Guitar({ guitar, addToCart } : GuitarProps) {   
    
    // Elimina la propiedad id, no se utiliza
    const { name, image, description, price } = guitar

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">

            <div className="col-4">
                {/* Solamente los tipos de datos especificados en el objeto Guitar se pueden imprimir */}
                <img className="img-fluid" src={`/img/${image}.jpg`} alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">{name}</h3>
                <p>{description}</p>
                <p className="fw-black text-primary fs-3">$ {price}</p>

                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={() => addToCart(guitar)}

                >Agregar al Carrito</button>
            </div>
        </div>
    )
}