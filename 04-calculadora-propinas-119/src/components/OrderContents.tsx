import React from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from '../helpers';

// Define el type para las props de este componente
type OrderContentsProps = {
    order: OrderItem[];
}

// Componente para el contenedor de ordenes, recibe la prop order y se asigna su type
export default function OrderContents({ order }: OrderContentsProps) {
    return (
        <div>
            <h2 className='font-black text-4xl'>Consumo</h2>

            {/* Aplica un espaciado y un margen superior al contenedor */}

            {/* Un detalle es que se utiliza la propiedad mt-10 aqui y en App.tsx para el contenedor del menú */}
            <div className='space-y-3 mt-10'>
                {/* Muestra un texto si la cantidad de items en order es 0 */}
                {order.length === 0 ?
                    <p className='text-center'>La orden esta vacia</p>
                    :
                    // <p className='text-center'>La orden tiene algo</p>

                    // De lo contrario mostrara la lista de order
                    (
                        order.map(item => (
                            // No olvidar el key, se asigna en el primer elemento hijo

                            // Aplica estilos, diseño de caja flex con borde superior

                            // items-center -> alinea verticalmente al medio

                            // last-of-type:border-b -> Aplica un borde inferior al ultimo elemento hijo del contenedor
                            <div
                                key={item.id}
                                className='flex items-center justify-between border-t border-gray-200 py-5 last-of-type:border-b'
                            >

                                {/* Para alinear ciertos elementos a la izquierda y a la derecha se tiene que definir otro div */}
                                <div>
                                    {/* item (cada elemento) posee todas las propiedades que se utilizan en el type order */}
                                    <p className='text-lg'>
                                        {/* Una alternativa es utilizar el signo de dolar para mostrar la moneda */}
                                        {/* {item.name} - ${item.price} */}

                                        {/* Otra forma es crear una función para que lo formatee, esta función se ha definido en la carpeta helpers */}
                                        {item.name} - {formatCurrency(item.price)}
                                    </p>
                                    {/* Muestra la cantidad y calcula el precio total, este utlimo se pasa como argumento a la función formatCurrency */}
                                    <p className='font-black'>
                                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                                    </p>
                                </div>

                                {/* Botón para eliminar no funcional */}
                                {/* 8 equivale a 32px */}
                                {/* rounded-full -> borde redondeado circular */}

                                <button className='bg-red-600 h-8 w-8 rounded-full text-white'>
                                    X
                                </button>

                                {/* Recuerda que todo esto se renderiza por cada elemento */}
                            </div>
                        ))
                    )
                }
            </div>
        </div>


    )
}
