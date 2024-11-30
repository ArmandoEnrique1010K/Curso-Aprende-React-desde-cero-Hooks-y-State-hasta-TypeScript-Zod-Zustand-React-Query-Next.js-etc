// Importa la data

import { categories } from "../data/categories";

// Escribe rfc para generar la estructura del componente

// Componente para el formulario
export default function Form() {
    return (
        // space-y-5 aplica un espaciado a los elementos hijos
        // shadow aplica un sombreado
        // rounded-lg aplica esquinas redondeadas (border-radius)
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
            <div className="grid grid-cols-1 gap-3">
                {/* Logicamente en un contador de calorias, las comidas van ingresando calorias y las actividades van bajando calorias */}

                {/* Se conecta el atributo htmlFor con el atributo id del elemento select */}
                <label htmlFor="category">Categoria:</label>
                {/* Select para las categorias con estilos, border aplica un borde */}
                <select className="border border-slate-300 p-2 rounded-lg w-full bg-white" id="category">
                    {/* Itera el arreglo categories con el metodo map */}
                    {categories.map(category => (
                        // Renderiza un option por cada categoria, se asigna un key y un value
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                            {/* CONTINUA EN 4:00 */}
                        </option>
                    ))}
                </select>
            </div>
        </form>
    )
}

// Es complicado trabajar con formularios en React, aunque existen librerias que lo simplifican
