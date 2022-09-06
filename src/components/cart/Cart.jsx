//native_react
import React, { useContext } from 'react'
//external
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
//components
import { CartContext } from '../../context/CartContext'
import CartProducts  from './CartProducts'




const Cart = () => {
  
  const { cart, TotalCost, ClearCart } = useContext(CartContext)
  const navigate = useNavigate()



/*   if (cart.length === 0) {
    return (
      <>
        <h2>No has agregado nada a tu carrito, aun</h2>
      </>
    )
  } */
  return (
    <div>
     {cart.map((item) => (
        <CartProducts key={item.id} item={item} />
      ))}
    <span><ha>Total: ${TotalCost}</ha></span>
    <Button variant="danger" onClick={ClearCart}>Vaciar Carrito</Button>
    </div>
  )
}

export default Cart