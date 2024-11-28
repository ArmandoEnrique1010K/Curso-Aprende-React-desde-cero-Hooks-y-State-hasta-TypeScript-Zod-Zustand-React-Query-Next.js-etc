export type MenuItem = {
    id: number,
    name: string,
    price: number
}

// Type para la orden, hereda el type MenuItem y se agrega una propiedad quantity
export type OrderItem = MenuItem & {
    quantity: number
}