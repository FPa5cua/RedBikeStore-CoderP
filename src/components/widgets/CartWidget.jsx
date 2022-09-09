//native_react
import React, { useContext,} from 'react'
//external
import { RiShoppingCartFill } from "react-icons/ri";
import styled from 'styled-components';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
//components
import { CartContext } from '../../context/CartContext'
/* import CartProvider from '../../context/CartContext'; */


const StyledWidget = styled(RiShoppingCartFill)
`
color: black;
height: 1.5rem;
width: 1.5rem; 
`

const CartWidget = () => {

  const context = useContext(CartContext)
  
return (
  <>
    <div>
      <Button variant="light">
        <StyledWidget/> 
        <Badge  pill bg="success">
          {context.cart.length > 0 && 
          context.cart.length }
        </Badge>
        </Button>
    </div>
  </>
  )
}

export default CartWidget