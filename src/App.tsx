import { menuItems } from "./data/db"
import Header from "./components/Header"
import MenuItems from "./components/MenuItems"
import OrderContents from "./components/OrderContents"
import TipPrecentageForm from "./components/TipPrecentageForm"
import OrderTotal from "./components/OrderTotal"
import { useReducer } from "react"
import { initialState, OrderReducer } from "./reducers/order-reducer"



function App() {

  const [state, dispatch] = useReducer(OrderReducer, initialState)

  return (
    <>
      <Header />
      <main className="mx-auto pt-5 grid md:grid-cols-2 max-w-7xl font-mono">
        <div>
          <h2 className=" text-indigo-700 font-bold text-center text-3xl mb-2">
            Menú
          </h2>
          <div className=" space-y-1">
            {menuItems.map((item) => (
              <MenuItems
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>
        <div className="ml-2">

          <div className="space-y-1 snap-y">
            <div className=" overflow-auto">
              {state.order.length == 0 ?
                <p className="text-center text-3xl m-3 p-3 font-semibold">Orden vacia</p>
                : (
                  <>
                    <h2 className="text-indigo-700 font-mono font-bold text-center text-3xl mb-2">
                      Consumo
                    </h2>
                    {state.order.map((item) => (
                      <OrderContents
                        key={item.id}
                        item={item}
                        dispatch={dispatch}
                      />
                    ))}
                    <TipPrecentageForm
                      tip = {state.tip}
                      dispatch={dispatch}
                    />
                    <OrderTotal
                      order={state.order}
                      tip={state.tip}
                      dispatch={dispatch}
                    />
                  </>
                )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
