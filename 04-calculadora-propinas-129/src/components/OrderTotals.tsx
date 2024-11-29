// Se importa useCallback y no useMemo
import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    // type para la función placeOrder (no retorna nada)
    placeOrder: () => void
}

export default function OrderTotals({ order, tip, placeOrder }: OrderTotalsProps) {

    // USECALLBACK

    // Es una alternativa a useMemo, lleva una sintaxis parecida.

    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    // Con useCallback se mandan a llamar a las otras funciones (se ven más parentesis en el codigo)
    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])

    // Aqui tambien utiliza useCallback para calcular el total
    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl">Totales y Propinas:</h2>
                {/* Se llama a la función subTotalAmount y se repite el mismo patrón en los demás calculos */}
                <p>
                    Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmount())}</span>

                </p>
                {/* Llama a la función tipAmount */}
                <p>
                    Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount())}</span>
                </p>
                {/* Llama a la función totalAmount */}
                <p>
                    Total a Pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount())}</span>
                </p>
            </div>

            {/* Botón para "reiniciar" la orden */}

            {/* uppercase -> Aplica mayusculas */}
            {/* disabled:opacity-10 -> Aplica opacidad si el botón esta deshabilitado (propiedad disabled) */}
            <button className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"

                // El botón estara deshabilitado si el totalAmount es igual a 0 (recuerda que disabled puede llevar 2 valores: true o false)
                disabled={totalAmount() === 0}

                // Llama a la función al hacer clic en el botón
                onClick={placeOrder}
            >
                Guardar Orden
            </button>
        </>
    )
}
