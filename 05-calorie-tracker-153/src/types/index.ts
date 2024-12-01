export type Category = {
    id: number
    name: string
}

// Añade la propiedad id (tipo string)
export type Activity = {
    id: string
    category: number,
    name: string
    calories: number
}