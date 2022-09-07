//native_react
import React, { useContext, useState } from 'react'
//external
import { RiShoppingCartFill } from "react-icons/ri";
import styled from 'styled-components';
//components
import CartProvider from '../../context/CartContext';
import { CartContext } from '../../context/CartContext'


const StyledWidget = styled(RiShoppingCartFill)
`
color: black;
height: 1.5rem;
width: 1.5rem; 
`
const StyledCount = styled.h4
`
color: black;
padding: .5rem
margin: .3rem
height: 1.1rem;
`

const CartWidget = () => {

  const cartValue = useContext(CartContext)
  /* const [fill, setFill]= useState() */

console.log(cartValue)
  
return (
  <>
    <div>
      <StyledWidget/> 
      {cartValue.cart.length > 0 && <StyledCount>{cartValue.cart.length}</StyledCount>}
    </div>
    
  </>
  )
}

export default CartWidget