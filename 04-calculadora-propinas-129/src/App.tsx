import MenuItem from './components/MenuItem';
import OrderContents from './components/OrderContents';
import OrderTotals from './components/OrderTotals';
import TipPercentageForm from './components/TipPercentageForm';
import { menuItems } from './data/db'
import useOrder from './hooks/useOrder';

function App() {

  // Agrega la función placeOrder
  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder();

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

        <div className='border border-dashed border-slate-300 p-5 rounded-lg space-y-10'>

          {/* Si la cantidad de elementos en order es mayor que 0, mostrara los componentes para las ordenes  */}

          {/* Se comprueba la cantidad en el componente padre */}
          {/* order.length > 0 */}
          {/* order.length */}

          {/* Si la cantidad es 0 se evalua como false */}
          {
            order.length ? (
              <>
                <OrderContents
                  order={order}
                  removeItem={removeItem}
                />

                <TipPercentageForm
                  setTip={setTip}
                  // Pasa la propina
                  tip={tip}
                />

                <OrderTotals
                  order={order}
                  tip={tip}
                  // Pasa la función al componente OrderTotals
                  placeOrder={placeOrder}
                />
              </>
            ) : (
              // De lo contrario, muestra el parrafo cuando la orden esta vacia
              <p className='text-center'>La orden esta vacia</p>)
          }

          {/* Puedes comprobar en React Developers Tools, al pulsar sobre el botón Guardar Orden (se encuentra en OrderTotals.jsx) los componentes se quitan del arbol del componentes y cuando se agrega un item, se crean los componentes */}

        </div>

      </main>
    </>
  )
}

export default App
