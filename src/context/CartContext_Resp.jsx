//native_react
import React, { createContext, useState} from 'react'
//external

//components


export const CartContext = createContext ({})

const CartProvider =({children})=> {
    const [cart, setCart]= useState([])
    const [itemsInTotal, setItemsInTotal]= useState(0)
    const [totalAmount, setTotalAmount]= useState(0)
    const [quantOfProd, setQuantOfProd] = useState(0)

    console.log('cart del context:',cart)

    const AddToCart =(addedToCart)=> {
        const IsInCart = cart.some((item) => item.id === addedToCart.id)
        
        if(IsInCart){
            const CartUpdate = cart.map((item)=> {
                if(item.id === addedToCart.id){
                    return { ... item, quantity: item.quantity + addedToCart.quantity}
                }else{
                    return item
                }
            })
            setCart(CartUpdate)
            
        }else{
            setCart([...cart, addedToCart])
        }
    }
    
    
    const ClearCart =()=> {
        setCart([])
        itemsInTotal(0)
        totalAmount(0) 
    }
    
    const RemoveFromCart =(id)=> {
        setCart(cart.filter((items) => items.id !== id))
    }
    
    const QuantOfItem = (quantity) =>{
        let selectedItem = !itemsInTotal ? quantity : itemsInTotal + quantity;
        setItemsInTotal(selectedItem) 
    }
    /* const ProdsInCart =(quantity)=> {
        let itemFromCard = !itemsInTotal ? quantity : itemsInTotal + quantity
        setItemsInTotal(itemFromCard)
    } */



/*     const TotalCostPerProd =()=> {
        let cartTotal = 0
        cart.map(item =>{
            return cartTotal= cartTotal + (item.quantity * item.price)
        })
        setTotalAmount=(cartTotal)
    } */

    const cartValue ={
        cart,
        AddToCart, 
        ClearCart, 
        RemoveFromCart, 
        /* ProdsInCart, */
        /* TotalCostPerProd, */
        totalAmount,
        QuantOfItem,
        itemsInTotal,
    }

    return(
        <CartContext.Provider value={cartValue}>
            {children}
        </CartContext.Provider>
    )
}

export default   CartProvider  
