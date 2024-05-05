import { MenuItemType } from "../types"

type MenuItemProps = {
    item: MenuItemType
    addItem: (item:MenuItemType)=> void
}

export default function MenuItems({item,addItem} : MenuItemProps) {
    const {name,price}= item
    
    return (
    <button className=" border-2 border-indigo-200 hover:bg-indigo-300 hover:font-bold w-full p-2 flex justify-between font-mono rounded-lg"
        onClick={()=>{
            addItem(item)
        }}
    >
       <label >{name}</label>
       <label className=" font-black">{price}</label>     
    </button>
  )
}
