//native_react
import React, { useContext } from 'react'
//external
import { RiShoppingCartFill } from "react-icons/ri";
import styled from 'styled-components';
//components
import CartProvider from '../../context/CartContext';
import {CartContext, useCart} from '../../context/CartContext'


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
  /* const cartValue = useContext(CartContext)
  const {QuantInCard} = useCart() */

  return (
  <>
    <StyledWidget/> 
    {/* <StyledCount>{cartValue.QuantInCard}</StyledCount> */}
  </>
  )
}

export default CartWidget