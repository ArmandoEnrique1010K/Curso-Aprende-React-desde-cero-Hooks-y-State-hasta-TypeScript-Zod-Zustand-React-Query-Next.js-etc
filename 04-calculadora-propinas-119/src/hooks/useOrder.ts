// Hook personalizado para la orden

import { useState } from "react"

// Importa el type OrderItem
import type { MenuItem, OrderItem } from "../types";

export default function useOrder() {

    // GENERICS EN TYPESCRIPT
    // Se especifica el tipo de dato que no solamente se infiera con su valor inicial

    // Utiliza <> luego de useState para especificar el tipo de dato o un type. En este caso el tipo de dato debe coincidir con el valor inicial
    // Pero esto es una mala practica porque hay redundancia
    // const [total, setTotal] = useState<number>(0)

    // Si lo dejas sin ningun valor inicial, infiere que puede ser segun el tipo de dato en el Generic o un null
    // const [total, setTotal] = useState<number>()

    // Normalmente typescript infiere por el valor inicial
    // const [auth, setAuth] = useState(false)

    /* */

    // State para la orden, utiliza un Generic, de esta forma typescript revisa que todos los elementos agregados tengan la misma estructura, mantiene el arreglo con las propiedades
    const [order, setOrder] = useState<OrderItem[]>([])

    // Función para agregar un item, requiere un parametro item, cuyo tipo de dato es MenuItem
    const addItem = (item: MenuItem) => {
        // console.log("agregando...")
        // console.log(item)

        // Aqui se verifica si el item existe utilizando el metodo find
        const itemExist = order.find(orderItem => orderItem.id === item.id);

        // Si existe
        if (itemExist) {
            // console.log("Ya existe...")

            // Se tiene que encontrar el item que se ha añadido

            // Debido a la inmutabilidad en React, no puedes modificar directamente el state order, pero puedes identificar el elemento, tomar la cantidad e incrementarlo, manteniendo objetos inmutables

            // Utiliza el metodo map en order (devuelve un arreglo que contiene los elementos devueltos). Además encadena operador ternario.
            const updatedOrder = order.map(orderItem => orderItem.id === item.id
                ?
                // La cantidad del item que se repite se incrementa en 1
                { ...orderItem, quantity: orderItem.quantity + 1 }
                :
                // De lo contrario, mantiene los elementos no duplicados
                orderItem);

            // El autocompletado funciona con typescript

            // Setea la orden actualizada
            setOrder(updatedOrder);

        } else {
            // De lo contrario...

            // Setea el nuevo item a la orden, manteniendo la orden anterior, pero muestra un error porque el tipo MenuItem no se puede asignar a OrderItem
            // setOrder([...order, item])

            // Una solución es crear una variable y agregar 1 a la cantidad

            // Opcionalmente lo puedes castear el tipo de dato a OrderItem para asegurarse de que sea ese type
            const newItem: OrderItem = { ...item, quantity: 1 };

            // En lugar de item se establece el newItem
            setOrder([...order, newItem])

        }

    }

    // console.log(order);

    // Retorna la función addItem y el arreglo de ordenes
    return {
        order,
        addItem
    }
}