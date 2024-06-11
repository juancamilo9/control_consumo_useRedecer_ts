import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers/helpers"
import { OrderActions } from "../reducers/order-reducer"

type OrderTotalProps = {
    order: OrderItem[]
    dispatch: React.Dispatch<OrderActions>
    tip:number

}

export default function OrderTotal({order,dispatch,tip}:OrderTotalProps) {
    
  // Se esta realizando la suma total con reduce
    const subtotalAmount = useMemo(()=> order.reduce((total, item) => total+(item.quantity*item.price),0),
    [order])

    const tipAmount = useMemo(()=> subtotalAmount*tip,[tip,order])
    const totalAmount = useMemo(()=> subtotalAmount+tipAmount,[tip,order])

    return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl text-center mt-2">Totales y propinas:</h2>
        <p>Subtotal a pagar:{' '}
            <span className="font-blod">{formatCurrency(subtotalAmount)}</span>
        </p>
        <p>propina:{' '}
            <span className="font-blod">{formatCurrency(tipAmount)}</span>
        </p>
        <p>Total a pagar:{' '}
            <span className="font-blod">  {formatCurrency(totalAmount)}</span>
        </p>
      </div>
      
      <button className=" w-full bg-indigo-500 font-bold text-white p-3 rounded-lg mt-10 hover:bg-indigo-700"
        onClick={()=>dispatch({type:'clear-order'})}
      >
        Guardar orden
      </button>
    </>
  )
}
