import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

// Define los types para las props
type OrderTotalsProps = {
    order: OrderItem[],
    // La propina es de tipo number (valores: 0.1, 0.2 o 0.5)
    tip: number
}

// Recuerda que puedes utilizar types o interface

// Genera la función escribiendo "rfc" y pasale la prop order. Este componente contiene el total de la orden
export default function OrderTotals({ order, tip }: OrderTotalsProps) {

    // Variable para el subtotal
    // useMemo permite que unicamente se renderize el codigo cuando cambie la dependencia

    // El metodo reduce requiere de 2 parametros: total e item, total es el acumulador por cada iteración, item es el elemento actual.
    // Calcula el subtotal en base al precio de los articulos y sus cantidades
    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    // La propina va a depender de 2 cosas: tip y order. Logicamente cuando se agregue un nuevo item o cambie la propina

    // Calcula la propina de acuerdo al subtotal
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    // El total es la suma del subtotal más las propinas
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order])

    // En tipAmount si solamente se asigna la dependencia de tip (propina), tipAmount no actualizara la propina luego de agregar otro elemento a la lista

    // Las dependencias de useMemo permite ejecutar el codigo cuando cambie aquellas dependencias

    return (
        <>
            {/* Recuerda que la clase space-y-3 agrega un espacio a los elementos hijos */}
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                <p>
                    {/* Para insertar un espacio en blanco puedes utilizar {''} o dar un espacio con la tecla espacio. Recuerda que JavaScript ignora los espacios en blanco que estan por demás */}
                    Subtotal a pagar: {''}
                    {/* El subtotal es la suma de todas las cantidades por el precio de cada item, como el calculo vienen del state order */}
                    {/* <span className="font-bold">$0</span> */}

                    {/* Recuerda que la función que se encuentra en helpers, formatCurrency sirve para aplicar el formato $0.00 */}
                    <span className="font-bold">{formatCurrency(subtotalAmount)}</span>

                </p>
                {/* tipAmount contiene la propina, se aplica el formato de moneda */}
                <p>
                    Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>

                {/* totalAmount contiene el total a pagar */}
                <p>
                    Total a Pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>

                {/* Puedes probar eliminando elementos y el codigo se vuelve a ejecutar realizando de nuevo los calculos */}
            </div>


            <button>

            </button>

        </>
    )
}
