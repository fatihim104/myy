import React from 'react'
// import data from '../data'
import Card from './Card'
import CartContext from '../CartContext'
import { useContext } from 'react'

export default function Products() {

  const {products} = useContext(CartContext)

    const productList = products
                        .map((handy, index) => <Card name={handy.name} text={handy.text} price= {handy.price} key={index} />)
  return (
    <div className="container row">
        {productList}
    </div>
  )
}
