import { useMemo, Dispatch } from "react"
import { Activity } from "../types"
import { categories } from "../data/categories"
// Importa los iconos de Hero Icons, al final se utiliza solid para iconos con relleno y outline para iconos bordeados

// PencialSquareIcon es un icono, existen más iconos en la documentación: https://heroicons.com/ 
import { PencilSquareIcon } from "@heroicons/react/24/outline"
import { ActivityActions } from "../reducers/activity-reducer"

// Type para las props recibidas
type ActivityListProps = {
    activities: Activity[]
    // Puedes colocarle lo siguiente para el tipo de dato
    // dispath: React.Dispatch<ActivityActions -> Simplifica importando Dispath de React
    dispatch: Dispatch<ActivityActions>
}

// Componente para la lista de actividades, escribe rfc para generarlo

// Recibe la prop activitites y se asigna el tipo de dato. No olvidar el dispatch
export default function ActivityList({ activities, dispatch }: ActivityListProps) {
    // Función con useMemo, recordar que se evitan los partentesis en el return si se usa useCallback

    // Pasa el parametro category dentro de la segunda función, se asigna el type Activity, especificamente la propiedad category
    const categoryName = useMemo(() =>
        (category: Activity['category']) =>
            // console.log(category)

            // Itera en categories con map para obtener el id de la categoria y luego devolver el nombre de la categoria
            categories.map(cat => cat.id === category ? cat.name : '')
        , [activities])

    return (
        <>
            {/* Titulo con estilos de tailwind */}
            <h2 className="text-4xl font-bold text-slate-600 text-center">
                Comida y actividades
            </h2>

            {/* Itera con map en el arreglo activities */}
            {activities.map(activity => (
                // Renderiza esto por cada elemento en activities, se asigna un key
                <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between">
                    {/* Se aplican estilos de tailwind */}
                    <div className="space-y-2 relative">
                        {/* Puedes colocar codigo javascript dentro del className, en este caso se aplican unos estilos y luego se pregunta si el category es igual a 1 o 2 y se añaden otros estilos*/}

                        {/* La categoria comida se muestra de color lima y ejercicio de color naranja */}
                        <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                            {/* category tiene 2 valores: 1 y 2 para comida y ejercicio (en el archivo categories.ts) */}

                            {/* {activity.category} */}
                            {/* Se llama a la función para mostrar el nombre de la categoria (se asegura que sea numerico el argumento que se pasa con signo +) */}
                            {categoryName(+activity.category)}
                        </p>
                        <p className="text-2xl font-bold pt-5">
                            {activity.name}
                        </p>
                        <p className="font-black text-4xl text-lime-500">
                            {activity.calories} {''}
                            <span>Calorias</span>
                        </p>
                    </div>

                    {/* Contenedor para los botones */}
                    <div className="flex gap-5 items-center">
                        {/* Botón con un icono de editar, recibe un callback para llamar a dispath en el evento onClick */}
                        <button
                            onClick={() => dispatch({
                                type: 'set-activeId',
                                // Como payload pasa un objeto que contiene el id de activity
                                payload: { id: activity.id }
                            })}
                        >
                            {/* Puedes abrir React Developer Tools para revisar el id activo (componente App, hay un reducer que contiene activities y activeId). Luego de agregar una actividad haz clic en el icono de editar y veras que activeId toma el id de la actividad seleccionada */}

                            {/* Las clases h-8 y w-8 se utilizan para el tamaño del elemento a 32px */}
                            <PencilSquareIcon className="h-8 w-8 text-gray-800" />
                        </button>
                    </div>
                </div>
            ))}
        </>
    )
}
