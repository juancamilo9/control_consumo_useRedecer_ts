import { useState } from "react"
import { MenuItemType, OrderItem} from "../types"


export default function useOrder(){
    
    const [order,setOrder] = useState<OrderItem[]>([])
    const [tip, setTip] = useState(0)

    const addItem = (item:MenuItemType) =>{
    
        // Si un elemento existe, se ajusta la cantidad, si no, se registra ala orden
        const ItemExist = order.find(orderItem => orderItem.id === item.id)
        if(ItemExist){
            // Buscamos el item que ya existe dentro de nuestro order
            const updatedOrder = order.map(orderItem => orderItem.id===item.id?
                { ...orderItem, quantity:orderItem.quantity + 1 }:
                orderItem
            )
                setOrder(updatedOrder) 
        }
        else{
            // Casteamos el tipo de dato para poder agregarlo a nuesta orden
            const newItem : OrderItem = {...item, quantity:1}
            setOrder([...order, newItem])    
        }
        
    }

    const removeItem = (id:OrderItem['id'])=>{
    
        setOrder(order.filter(item=>item.id !== id))
    }

    const clearOrder=()=>{
        setOrder([])
        setTip(0)
    }


    return {
        order,
        tip,
        setTip,
        addItem,
        removeItem,
        clearOrder
    }
}
