import React from "react";
import CartContext from "../CartContext";
import foto from "../images/photo-1.avif";
import { useContext } from "react";

export default function Card({ name, text, price, index }) {

  const {addToBasket} = useContext(CartContext)
    
  return (
    <div className="card mx-2" style={{ width: "16rem" }} key={index}>
      <img
        src={foto}
        style={{ height: "14rem" }}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{text}</p>
        <p className="card-text">
          price : <b>{price}</b>
        </p>
        {text && <buton href="#" onClick={() => addToBasket(name, price)} className="btn btn-primary">
          buy
        </buton> }
      </div>
    </div>
  );
}
