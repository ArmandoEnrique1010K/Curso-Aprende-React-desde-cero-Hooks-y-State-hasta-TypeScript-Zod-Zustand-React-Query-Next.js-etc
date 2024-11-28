import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    // Agrega la función addItem, la sintaxis es comun cuando se pasa una función

    // void quiere decir que la función no retorna nada

    // El simbolo ? hace que la función sea opcional, puede pasar o no esta prop
    // addItem?: () => void

    // Al agregar un parametro a la función, marca un error porque cuando se llama a la función en el evento onClick no se pasa un argumento, asignale el tipo de dato MenuItem al parametro
    addItem: (item: MenuItem) => void

    // En el caso de que se importe 2 veces MenuItem, corrigelo
}

export default function MenuItem({ item, addItem }: MenuItemProps) {

    return (
        <>
            <button className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between"
                // Define un evento onClick, se activa al hacer clic en el
                onClick={() => addItem(item)}
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>
        </>
    )

}

