import { formatCurrency } from "../helpers/helpers"
import { OrderItem } from "../types"

type OrderItemTypeContentProps = {
    item: OrderItem
    removeItem:(id:OrderItem['id'])=>void
}

export default function OrderContents({ item,removeItem }: OrderItemTypeContentProps) {
    const { id,name, price, quantity } = item
    const cost = quantity * price
    return (
        <div className="p-2 flex justify-between border-t border-indigo-200 items-center last-of-type:border-b">
            <div>
                <h2 className="font-black"><span className="text-indigo-600 ">Producto: </span>{name} - {formatCurrency(price)}</h2>
                <p className="font-black"><span className="text-indigo-600 ">Cantidad: </span>{quantity} - {formatCurrency(cost)}</p>
            </div>

            <button className="bg-red-500 h-8 w-8 rounded-full text-white font-black" 
                onClick={()=>removeItem(id)}
            >
                X
            </button>
        </div>
    )
}
