import { createContext, useState } from "react";
import data from './data'

const CartContext = createContext()

export function CartProvider({children}){

    const [items, setItems] = useState([])
    const [products, setProducts] = useState(data)
    const [inBasket, setInBasket] = useState(false)
    

  const addToBasket = (name, price) => {
    setItems((prevState) => [...prevState, {name, price }])
    
  }
    return(
       <CartContext.Provider value={{products, items, addToBasket, inBasket}}>
        {children}
       </CartContext.Provider>
    )
}

export default CartContext;

