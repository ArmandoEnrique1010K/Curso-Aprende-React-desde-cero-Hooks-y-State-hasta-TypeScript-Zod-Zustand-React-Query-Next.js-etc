// Componente que representa una guitarra del catalogo

export function Guitar() {
    return (
        // Se tralada aqui todo el contenido que define una guitarra del catalogo

        // El proyecto contiene guitarras, cada uno de ellos tiene un titulo, precio, descripción y una imagen.

        // Al crear el componente y dejarlo estatico se tendrá el mismo contenido.

        <div className="col-md-6 col-lg-4 my-4 row align-items-center">
            <div className="col-4">
                <img className="img-fluid" src="./public/img/guitarra_01.jpg" alt="imagen guitarra" />
            </div>
            <div className="col-8">
                <h3 className="text-black fs-4 fw-bold text-uppercase">Lukather</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quae labore odit magnam in autem nesciunt, amet deserunt</p>
                <p className="fw-black text-primary fs-3">$299</p>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                >Agregar al Carrito</button>
            </div>
        </div>
    )
}