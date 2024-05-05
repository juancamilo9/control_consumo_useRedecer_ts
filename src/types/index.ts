export type MenuItemType = {
    id:number
    name:string
    price:number
}

// Se hereda las propiedades del MenuItemType a nuestro type OrderItem

export type OrderItem = MenuItemType &  { quantity:number }