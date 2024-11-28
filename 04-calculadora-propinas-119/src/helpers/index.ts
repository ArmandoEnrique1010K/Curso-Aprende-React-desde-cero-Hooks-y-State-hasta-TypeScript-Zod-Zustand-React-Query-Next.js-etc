// Función de tipo helper para formatear moneda a $
export function formatCurrency(quantity: number) {
    // Aplica un formato numerico, requiere un idioma, tipo (currency es para moneda) y formato (USD es tipo estadounidense)
    return new Intl.NumberFormat('en-US', {
        style: 'currency', currency: 'USD'
    }).format(quantity)

    // Se encadena format para utilizar el parametro
}

// La función coloca el signo de dolar al lado izquierdo
// $20