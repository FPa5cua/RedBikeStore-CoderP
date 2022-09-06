//native_react
import React from 'react'
import { createContext, useState} from 'react'
//external

//components


export const CartContext = createContext ({})

const CartProvider =({children})=> {
    const [cart, setCart]= useState([])
    const [itemsInTotal, setItemsInTotal]= useState(0)
    const [totalAmount, setTotalAmount]= useState(0)
    
    const AddToCart =(addedData)=> {
        const inCart = cart.find((item) => item.id === addedData.id)
        if(inCart){
            const cartUpdate = cart.map((item)=> {
                if(item.id === addedData.id){
                    return { ... item, quantity: item.quantity + addedData.quantity}
                }else{
                    return item
                }
            })
            setCart(cartUpdate)
            QuantInCard(addedData.quantity)
        }else{
            setCart([...cart, addedData])
            QuantInCard(addedData.quantity)
        }
    }
    
    const RemoveFromCart =(id)=> {
        setCart(cart.filter((item)=> item.id !== id))
    }
    
    const ClearCart =()=> {
        setCart([])
        setItemsInTotal(0)
        setTotalAmount(0)
    }

    const QuantInCard =(quantity)=> {
        let itemFromCard = !itemsInTotal ? quantity : itemsInTotal + quantity
        setItemsInTotal(itemFromCard)
    }

    const TotalCost =()=> {
        let priceTotal = 0
        cart.map(item =>{
            return priceTotal= priceTotal + (item.quantity * item.price)
        })
        setTotalAmount=(priceTotal)
    }

    const cartValue ={
        cart,
        AddToCart, 
        RemoveFromCart, 
        ClearCart, 
        QuantInCard,
        totalAmount,
        itemsInTotal,
        TotalCost
    }

    return(
        <CartContext.Provider value={{cartValue}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
