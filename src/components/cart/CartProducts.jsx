//native_react
import React, { useContext } from 'react'
//external
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
//components
import { CartContext } from '../../context/CartContext'


const CartProducts = (item) => {

    const { RemoveFromCart } = useContext(CartContext)
    

    return (
    <div>
            <span>{item.img}</span>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
            <span>{item.totalAmount}</span>
            <li><button variant="danger" onClick={()=>RemoveFromCart(item.id)}>Quitar este Producto</button></li>
    </div>
    )
}

export default CartProducts