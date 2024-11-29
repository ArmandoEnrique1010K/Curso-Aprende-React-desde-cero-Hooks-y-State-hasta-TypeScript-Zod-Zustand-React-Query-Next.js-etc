// En este caso se importa Dispatch y SetStateAction de React para asignar el tipo de dato (lo puedes asignar como type)
import type { Dispatch, SetStateAction } from "react"

// Arreglo iterable para los valores de las propinas
const tipOptions = [
    {
        id: 'tip-10',
        value: .10,
        label: '10%'
    },
    {
        id: 'tip-20',
        value: .20,
        label: '20%'
    },
    {
        id: 'tip-50',
        value: .50,
        label: '50%'
    },
]

// type para los props que se reciben
type TipPercentageFormProps = {
    // Asigna el tipo de dato para la función seteadora
    // setTip: React.Dispatch<React.SetStateAction<number>>

    // Importa Dispatch de React y SetStateAction de React para asignar lo siguiente (codigo reducido)
    setTip: Dispatch<SetStateAction<number>>
}

// Componente para las propinas
export default function TipPercentageForm({ setTip }: TipPercentageFormProps) {
    return (
        <div>
            <h3 className="font-black text-2xl">Propina:</h3>
            {/* Formulario para las propinas */}
            <form>
                {/* Accede a cada elemento de tipOptions con el metodo map */}
                {tipOptions.map(tip => (
                    // No olvidar el key
                    // La clase gap-2 añade un espaciado entre los elementos hijos
                    <div key={tip.id} className="flex gap-2">
                        <label htmlFor={tip.id}>{tip.label}</label>
                        <input
                            id={tip.id}
                            // Tipo radio, selecciona una opción
                            type="radio"
                            // name sirve para agrupar un conjunto de <input> de tipo radio, para poder marcar solamente uno de ellos
                            name="tip"
                            // value contiene el valor
                            value={tip.value}

                            // Evento que se dispara cuando cambia el valor

                            // target.value siempre va a ser un string, pero como setTip espera un tipo number, hay 2 formas de convertir String a number:

                            // Signo + al inicio (operador unario)
                            // setTip(+e.target.value)

                            // Utilizar valueAsNumber, pero solamente funciona con un input de tipo text
                            // setTip(e.target.valueAsNumber)

                            onChange={e => setTip(+e.target.value)}

                        // Puedes comprobar el resultado abriendo React Developers Tools, componente App, busca el state de tip para ver el valor luego de marcar un <input>


                        />
                        {/* Recuerda que las propiedades htmlFor e id de los elementos label e input se conectan al tener el mismo valor. Haz clic en el texto y se marca el input */}
                    </div>
                ))}
            </form>
        </div>
    )
}
