//native_react
import React, { useContext } from 'react'
//external
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure';
//components
import { CartContext } from '../../context/CartContext'


const CartProducts = (items) => {

    const { RemoveFromCart } = useContext(CartContext)
    console.log(items)

    return (
    <div>
        <Figure>
            <Figure.Image width={171} height={180}
            src={items.items.img}/>
        </Figure>
            
            <p>{items.items.name}</p>
            <p>{items.items.price}</p>
            <p>{items.items.quantity}</p>
            <p>{items.items.totalAmount}</p>
            <Button variant="danger" onClick={() => RemoveFromCart(items.id)}>Quitar del carrito</Button>
    </div>
    )
}

export default CartProducts