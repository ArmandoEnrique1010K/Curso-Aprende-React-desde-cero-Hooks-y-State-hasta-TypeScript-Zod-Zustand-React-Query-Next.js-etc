import { ChangeEvent, Dispatch, FormEvent, useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types";

// Se importa ActivityActions
import { ActivityActions } from "../reducers/activity-reducer";

// Define el type para las props, en este caso se va a utilizar el tipo de dato Dispach, en el Generic se pasa ActivityActions para la información de las acciones que se han creado
type FormProps = {
    dispatch: Dispatch<ActivityActions>
}

// Puedes crear una variable para almacenar los valores iniciales del state de activity
const initialState = {
    category: 1,
    name: '',
    calories: 0
}

// Recibe la función dispatch y se asigna el type FormProps
export default function Form({ dispatch }: FormProps) {

    const [activity, setActivity] = useState<Activity>(initialState)

    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {

        const isNumberField = ['category', 'calories'].includes(e.target.id)

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        })
    }

    const isValidActivity = () => {
        const { name, calories } = activity

        return name.trim() !== '' && calories > 0;
    }

    // Recuerda que la función se activa al enviar el formulario
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        // Aqui se tiene que disparar la acción, en este caso save-activity para guardar la actividad y requiere un payload

        // El payload requiere un tipo Activity, en este caso el state de activity
        dispatch({ type: 'save-activity', payload: { newActivity: activity } })

        // Reinicia los campos del formulario a sus valores iniciales
        // setActivity({
        //     category: 1,
        //     name: '',
        //     calories: 0
        // })

        // Establece la variable initialState (contiene los valores iniciales)
        setActivity(initialState);
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
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
                    onChange={handleChange}
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
                className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? 'Guardar comida' : 'Guardar ejercicio'}
                disabled={!isValidActivity()}
            />
        </form>
    )
}

