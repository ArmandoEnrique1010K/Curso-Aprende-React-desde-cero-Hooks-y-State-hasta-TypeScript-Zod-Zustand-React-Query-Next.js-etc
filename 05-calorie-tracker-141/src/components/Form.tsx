// Importa ChangeEvent y FormEvent
import { ChangeEvent, FormEvent, useState } from "react";
import { categories } from "../data/categories";

// Importa el type para Activity
import { Activity } from "../types";

export default function Form() {

    // Asigna el type Activity definido en types
    const [activity, setActivity] = useState<Activity>({
        category: 1,
        name: '',
        calories: 0
    })

    // Recuerda que any es un parametro explicito, se necesita especificarle un tipo de dato al parametro evento

    // Pegale el tipo de dato (muestra en el elemento <select> asociado)
    // e: React.ChangeEvent<HTMLSelectElement>

    // Para el elemento <input> asociado, muestra
    // ChangeEvent<HTMLInputElement>

    // Puedes simplicar importando ChangeEvent de React, se pasa el Generic para el elemento HTML. Si se van a tener 2 tipos de valores, puedes colocar un "|" para especificar una unión

    // La unión indica el tipo de dato que se utiliza cuando se tiene 2 tipos de datos a la vez
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        // Crea una variable para comprobar si se ha escrito en el campo category o calories (el nombre del campo esta definido en el atributo id del campo)
        // El metodo includes sirve para verificar si incluye uno de los valores del arreglo (se tiene en cuenta el tipo de dato)
        const isNumberField = ['category', 'calories'].includes(e.target.id)

        // Imprime true si escribes en el campo category o calories
        console.log(isNumberField)


        setActivity({
            ...activity,
            // [e.target.id] ? e.target.value

            // Se convierte a un tipo number si se ha escrito en el campo category o calories de lo contrario se mantiene el valor como un string
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    // Función para verificar si los campos contienen valores validos
    const isValidActivity = () => {
        // Se tiene en cuenta los valores escritos en los campos name y calories, el campo categories no cuenta porque siempre va a tener un valor

        // Extrae name y calories del objeto activity para generar variables utilizando desestructuración
        const { name, calories } = activity

        // Elimina los espacios en blanco con el metodo trim
        // Se comprueba que no haya espacios en blanco y que las calorias sean mayores que 0.

        // Comprueba imprimiendo en la consola true o false
        console.log(name.trim() !== '' && calories > 0)

        // Devuelve true o false
        return name.trim() !== '' && calories > 0;

        // Puedes colocar varios espacios en blanco en el campo name y lo valida
    }

    // Función para enviar el formulario, no olvidar el tipo de dato para el parametro e
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        // Previene la acción por defecto al enviar el formulario (abre una nueva pagina web)
        e.preventDefault()

        // Imprime un mensaje
        console.log("Submit...")

        // Si se tiene states más complejos se pueden almacenar en un reducer, es una forma de almacenar el state, no es de forma global sino un archivo aparte y un hook llamado useReducer
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            // Evento onSubmit, se activa cuando se envia el formulario al hacer clic en el botón para enviarlo

            // VSCode muestra el tipo de dato React al colocar el cursor sobre e -> FormEvent<HTMLFormElement>
            // onSubmit={e => handleSubmit}
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label
                    htmlFor="category"
                    className="font-bold"
                >Categoria:</label>
                <select
                    id="category"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.category}
                    // VSCode puede inferir en ese tipo de dato, utiliza una función de flecha para llamar a la función
                    // Si te colocas sobre "e", aparece lo siguiente: React.ChangeEvent<HTMLSelectElement>
                    // onChange={e => handleChange}

                    // Finalmente elimina la función de flecha y solamente llama a handleChange
                    onChange={handleChange}

                // En React Developer Tools, luego de cambiar de categoria, asigna la categoria en la propiedad category pero como un String por defecto, lo mismo ocurre con calories al asignar un valor numerico
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label
                    htmlFor="name"
                    className="font-bold"
                >Actividad:</label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
                    value={activity.name}
                    // Aqui puede marcar un error, porque el parametro e es solamente para un HTMLSelectElement, puedes realizar el mismo procemiento y muestra: ChangeEvent<HTMLInputElement>
                    // onChange={e => handleChange}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label
                    htmlFor="calories"
                    className="font-bold"
                >Calorias:</label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    placeholder="Calorias. ej. 300 o 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                // Añade la pseudoclase disabled para aplicar estilos cuando el botón este deshabilitado
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                // El texto del botón va a ser dinamico
                // value="Guardar comida o guardar ejercicio"

                // Muestra el texto dependiendo del valor de category: 1 para comida y 2 para ejercicio
                value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}

                // Deshabilita el botón si la función isValidActivity es false (se utilizan parentesis porque la función es retornable)
                disabled={!isValidActivity()}
            />
        </form>
    )
}

