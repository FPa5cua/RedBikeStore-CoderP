//native_react
import React, { useContext } from 'react'
//external
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
//components
import { CartContext } from '../../context/CartContext'


const CartProducts = (item) => {

    const { RemoveFromCart } = useContext(CartContext)
    console.log(item)

    return (
    <div>
            <img src={item.item.img}/>
            <p>{item.item.name}</p>
            <p>{item.item.price}</p>
            <p>{item.item.quantity}</p>
            <p>{item.item.totalAmount}</p>
            <button variant="danger" 
            onClick={()=>RemoveFromCart(item.id)}>Quitar este Producto</button>
    </div>
    )
}

export default CartProducts