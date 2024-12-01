// Importa la data
import { useState } from "react";
import { categories } from "../data/categories";

// Escribe rfc para generar la estructura del componente

// Componente para el formulario
export default function Form() {

    // Comunmente se puede definir un state para las categoria, actividad y calorias
    // const [category, setCategory] = useState('')
    // const [activity, setActivity] = useState('')
    // const [calories, setCalories] = useState('')

    // El problema es que los 3 states estan relacionados unos a otros, una solución es utilizar un objeto como valor inicial
    const [activity, setActivity] = useState({
        // Se especifica el valor inicial para cada propiedad del objeto
        // en category se especifica el valor del id
        category: 1,
        name: '',
        calories: 0
    })

    // Una convensión es utilizar handleChange para definir una función que escuche un evento
    const handleChange = (e) => {
        // Nota: Un error es que el parametro e tiene un tipo any

        // console.log("Algo Cambio")

        // Una tecnica comun es utilizar la propiedad target del evento para usar el campo del fomulario, descomenta esto y escribe en un campo del formulario para imprimir el elemento junto con sus atributos
        // console.log(e.target)

        // Imprime solamente el id del campo del formulario en el que el usuario ha escrito
        // console.log(e.target.id)

        // Posibles valores: category, name, calories

        // Imprime el texto escrito por el usuario
        // console.log(e.target.value)

        // Para colocar en el state lo que el usuario ha escrito utilizando la misma función handleChange en todos los campos del formulario, se utiliza lo siguiente

        // Si se ha escrito en el elemento con id="calories" que se asigne su valor con value="". Para aquello se setea el valor

        // Se utiliza corchetes para buscar por el atributo id y escribe el valor

        // Ocurre un error porque se pierde todo el state, puedes verlo en React Developers Tools
        // setActivity({
        //     [e.target.id]: e.target.value
        // })

        // Para que no se pierda la referencia se utiliza el operador spread para mantener el state de activity
        setActivity({
            ...activity,
            [e.target.id]: e.target.value
        })

        // Toma una copia de lo que se tiene en el state antes de escribir un nuevo state
    }

    return (
        // space-y-5 aplica un espaciado a los elementos hijos
        // shadow aplica un sombreado
        // rounded-lg aplica esquinas redondeadas (border-radius)
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">

            {/* Para una prueba, puedes escribir el valor de la propiedad name para demostrar la sincronización del state, puedes hacer esto en cualquier parte */}

            {activity.name}

            {/* Logicamente en un contador de calorias, las comidas van ingresando calorias y las actividades van bajando calorias */}
            <div className="grid grid-cols-1 gap-3">
                {/* Se conecta el atributo htmlFor con el atributo id del elemento select */}
                <label
                    htmlFor="category"
                    className="font-bold"
                >Categoria:</label>
                {/* Select para las categorias con estilos, border aplica un borde */}
                <select
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    // value asigna el valor por defecto, en este caso, toma el valor de category definido en el objeto activity (state)

                    // No se puede mostrar el valor escrito en el campo porque el valor que se asignara esta en el state, por ello se tiene que escribir en el state
                    value={activity.category}
                    // onChange es similar a un addEventListener, dentro debe tener una función
                    onChange={handleChange}
                >
                    {/* Itera el arreglo categories con el metodo map para mostrar las categorias */}
                    {categories.map(category => (
                        // Renderiza un option por cada categoria, se asigna un key y un value
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {/* Contiene el nombre de la categoria */}
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            {/* Campo para ingresar el nombre de la actividad o comida */}
            <div className="grid grid-cols-1 gap-3">
                <label
                    htmlFor="name"
                    className="font-bold"
                >Actividad:</label>

                {/* <input> de tipo text para el nombre, si no se define el type, automaticamente se reconoce como tipo text. Se aplican los mismos estilos y se utiliza un placeholder para un texto indicativo para el usuario */}
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                    // Como el valor en la propiedad name es un string vacio, no asigna nada
                    value={activity.name}
                    onChange={handleChange}

                />
            </div>

            {/* Campo para ingresar la cantidad de calorias */}
            <div className="grid grid-cols-1 gap-3">
                <label
                    htmlFor="calories"
                    className="font-bold"
                >Calorias:</label>
                <input
                    id="calories"
                    // El type es un number porque solamente va a permitir numeros
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Calorias. ej. 300 o 500"
                    // Realiza el mismo procedimiento
                    value={activity.calories}
                    onChange={handleChange}

                // Puedes asignar valores en el objeto activity para mostrarlos como valor por defecto en el campo del formulario

                // Abre React Developers Tools, abre el componente Form para ver el state activity

                // Uno de los errores en la consola es que se tiene que aplicar un evento onChange o readOnly en los campos del formulario para poder escribir en esos campos.

                // onChange es un evento que se ejecuta luego de hacer un cambio en el campo definido del formulario
                />
            </div>

            {/* Botón para enviar el formulario, se utiliza un input de tipo submit */}

            {/* Si no se especifica un value, el texto por defecto que se mostrara en el botón es "Enviar" */}
            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
                value="Guardar comida o guardar ejercicio"
            />
        </form>
    )
}

// Es complicado trabajar con formularios en React, aunque existen librerias que lo simplifican
