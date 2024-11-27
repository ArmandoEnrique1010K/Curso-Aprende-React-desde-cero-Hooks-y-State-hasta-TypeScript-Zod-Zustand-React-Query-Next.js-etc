// type Guitar = {
//   id: number,
//   name: string,
//   image: string,
//   description: string,
//   price: number
// } 

// IMPORTAR LOS TYPES

// Se utiliza la siguiente sintaxis
import type {Guitar} from '../types/index';

// No se traslada el objeto GuitarProps porque solamente se utiliza en este componente
type GuitarProps = {
    guitar: Guitar, 
    addToCart: (item: Guitar) => void
}

// UN PROBLEMA AL UTILIZAR 2 VECES type Guitar

// El tipo de dato Guitar se utiliza en el archivo db.ts y en este archivo, al agregarle más propiedades al objeto Guitar se tendrian que realizar cambios en ambos types.

// Se recomienda colocar el type en un archivo aparte, en este caso, se crea el archivo "types.d.ts", un archivo de definiciones en la carpeta raíz src.

// Comenta o elimina el objeto de definición de datos Guitar y no se muestra ningun error, realiza el mismo procedimiento en el archivo db.ts

// Ahora el componente esta totalmente tipado con el objeto de definiciones Guitar
export function Guitar({ guitar, addToCart } : GuitarProps) {   
    
    const { name, image, description, price } = guitar

    return (
        <div className="col-md-6 col-lg-4 my-4 row align-items-center">

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
                    onClick={() => addToCart(guitar)}

                >Agregar al Carrito</button>
            </div>
        </div>
    )
}