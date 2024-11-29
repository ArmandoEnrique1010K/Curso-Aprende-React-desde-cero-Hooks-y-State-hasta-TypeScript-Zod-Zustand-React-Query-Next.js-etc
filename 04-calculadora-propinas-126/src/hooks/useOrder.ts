import { useState } from "react"
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {

    const [order, setOrder] = useState<OrderItem[]>([])

    // state para la propina
    const [tip, setTip] = useState(0)

    const addItem = (item: MenuItem) => {
        const itemExist = order.find(orderItem => orderItem.id === item.id);

        if (itemExist) {
            const updatedOrder = order.map(orderItem => orderItem.id === item.id
                ?
                { ...orderItem, quantity: orderItem.quantity + 1 }
                :
                orderItem);
            setOrder(updatedOrder);
        } else {
            const newItem: OrderItem = { ...item, quantity: 1 };
            setOrder([...order, newItem])
        }
    }

    // Funcion para eliminar un item
    // Para reconocer el item que se va a eliminar, requiere de un id
    // Se asigna el type de MenuItem, propiedad id, es tipo number, propaga el cambio
    // Aunque se podria colocar "id: number", pero en el caso de usar una base de datos, se tendria que hacer varios cambios y es por ello que solamente se utiliza el type principal MenuItem
    const removeItem = (id: MenuItem['id']) => {
        // console.log("eliminando...")
        // console.log("eliminando...", id)

        // Setea el state de order para mostrar todos los items a excepción del item cuyo id coincida con el que se ha recibido
        setOrder(order.filter(item => item.id !== id))
    }

    return {
        order,
        // En este caso se exporta el state y la función de tip (propina) de forma directa
        tip,
        setTip,
        addItem,
        // Exporta la función para eliminar
        removeItem
    }
}