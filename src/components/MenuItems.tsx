import { OrderActions } from "../reducers/order-reducer"
import { MenuItemType } from "../types"

type MenuItemProps = {
    item: MenuItemType
    dispatch: React.Dispatch<OrderActions>
}

export default function MenuItems({item,dispatch} : MenuItemProps) {
    const {name,price}= item
    
    return (
    <button className=" border-2 border-indigo-200 hover:bg-indigo-300 hover:font-bold w-full p-2 flex justify-between font-mono rounded-lg"
        onClick={()=>dispatch({type:'add-item', payload:{item:item}})}
    >
       <label >{name}</label>
       <label className=" font-black">{price}</label>     
    </button>
  )
}
