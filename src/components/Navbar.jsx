import React from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../CartContext'
import { useContext } from 'react'


export default function Navbar() {
  
    const {items } = useContext(CartContext)
  
  return (
      <nav className="navbar navbar-expand-lg text-bg-primary mb-4">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
                <Link to={"/"}>
                    <buton className="nav-link active" aria-current="page" href="#">
                        Products
                    </buton>
                </Link>
            </li>

            <li className="nav-item">
                <Link to={"/basket"}>
                    <buton className="nav-link" href="#">
                        Basket  <b>{items.length}</b>
                    </buton>
                </Link>
            </li>
          </ul>
        </div>
      </nav>
  )
}
