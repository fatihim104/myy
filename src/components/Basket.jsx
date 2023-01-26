import React, { useContext } from 'react'
import CartContext from '../CartContext'
import Card from './Card'

export default function Basket() {
  const {items} = useContext(CartContext)
  const basketList= items.map(item => <Card name={item.name} price={item.price}/>)
  return (
    <div>
    {basketList}
    </div> 
  )
}
