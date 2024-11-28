import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';

import { menuItems } from './data/db'
import useOrder from './hooks/useOrder';


function App() {

  // Llama al hook useOrder

  // Puedes colocar el cursor sobre la función addItem para ver el tipo de dato que se recibe
  const { order, addItem } = useOrder();

  // Al importar el hook personalizado, no se tiene en cuenta el orden de las funciones y states

  return (
    <>
      <header className='bg-teal-400 py-5'>
        <h1 className='text-center text-4xl font-black'>Calculadora de Propinas y Consumo</h1>
      </header>

      <main className='max-w-7xl mx-auto py-20 grid md:grid-cols-2'>
        <div className='p-5'>
          <h2 className='text-4xl font-black'>Menú</h2>

          <div className='space-y-3 mt-10'>
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>

        </div>

        {/* Añade unos estilos al div contenedor del consumo, como para mostrar un borde */}
        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>
          {/* <h2>Consumo</h2> */}

          {/* Llama al componente OrderContents y pasa order como prop. Marca un error porque no se tiene un type asignado en OrderContents */}
          <OrderContents order={order} />
        </div>

      </main>
    </>
  )
}

export default App
