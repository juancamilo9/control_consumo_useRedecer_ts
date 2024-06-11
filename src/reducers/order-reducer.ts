import { MenuItemType, OrderItem } from '../types'


export type OrderActions =
    { type: 'add-item', payload: { item: MenuItemType } } |
    { type: 'remove-item', payload: { id: OrderItem['id'] } } |
    { type: 'clear-order' } |
    { type: 'add-tip', payload: { value: number } }

export type OrderState = {
    order: OrderItem[]
    tip: number
}

// initialState
export const initialState: OrderState = {
    order: [],
    tip: 0
}

export const OrderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {

    if (action.type === 'add-item') {
        let updatedOrder:OrderItem[] = []
        const ItemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)
        if (ItemExist) {
            updatedOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ?
                { ...orderItem, quantity: orderItem.quantity + 1 } :
                orderItem
            )

        }
        else {
            const newItem: OrderItem = { ...action.payload.item, quantity: 1 }
            updatedOrder = [...state.order, newItem]
        }

        return {
            ...state,
            order:updatedOrder
        }
    }
    if (action.type === 'remove-item') {
        let newOrder = state.order.filter(item=>item.id !== action.payload.id)
        return {
            ...state,
            order:newOrder
        }
    }
    if (action.type === 'clear-order') {
        return {
            ...state,
            order:[],
            tip:0
        }
    }
    if (action.type === 'add-tip') {
        const tip = action.payload.value
        return {
            ...state,
            tip
        }

    }
    return state
}
