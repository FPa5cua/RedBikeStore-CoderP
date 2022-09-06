//native_react
import React, { createContext, useState} from 'react'
//external

//components


export const CartContext = createContext ({})

const CartProvider =({children})=> {
    const [cart, setCart]= useState([])
    const [itemsInTotal, setItemsInTotal]= useState(0)
    const [totalAmount, setTotalAmount]= useState(0)

    const AddToCart =(product)=> {
        const IsInCart = cart.some((item) => item.id === product.id)

        if(IsInCart){
            const CartUpdate = cart.map((item)=> {
                if(item.id === product.id){
                    return { ... item, quantity: item.quantity + product.quantity}
                }else{
                    return item
                }
            })
            setCart(CartUpdate)
        }else{
            setCart([...cart, product])
        }
    }
    
    const ClearCart =()=> {
        setCart([])
        itemsInTotal(0)
        totalAmount(0)
    }
    
    const RemoveFromCart =(id)=> {
        setCart(cart.filter((item)=> item.id !== id))
    }
    

    const ProdsInCart =(quantity)=> {
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
        ClearCart, 
        RemoveFromCart, 
        ProdsInCart,
        TotalCost,
        
    }

    return(
        <CartContext.Provider value={{cartValue}}>
            {children}
        </CartContext.Provider>
    )
}

export default  CartProvider 
