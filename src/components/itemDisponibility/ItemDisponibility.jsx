import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { useState } from 'react'



const ItemDisponibility = ({stock}) => {
    const [disponibility, setDisponibility]= useState(false)

    const disponibilityCheck =({stock})=>{
        if(stock > 0){
        setDisponibility(true)
        }
    }

    return (
        <>
        Stock:{' '}{disponibilityCheck ? 
            (<Badge pill bg="success">Disponible</Badge>
            ) : (
            <Badge pill bg="danger">Agotado</Badge>)}    
        </>
    ) 

    /* const itemAbailable = (stock >=1)
    const itemNotAbailable = (stock = 0) */

    
}

export default ItemDisponibility
