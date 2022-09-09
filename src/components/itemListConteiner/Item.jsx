//native_react
import React from 'react'
import { useState } from 'react'
//external
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import { GiDutchBike,  } from 'react-icons/gi'
//components


const Item = ({item}) => {
    const { id, img, name, brand, category, price, stock }= item
    

    return (
    <>
        <Card style={{ width: '18rem' }}>
            <Link className='link-d' to={`/item/${id}`}>
                <Card.Img variant="top" src={img} />
            </Link>
            <Card.Body>
            <h4>{name}</h4>
            <Card.Text>{brand}</Card.Text>
            <Card.Text>Categoria: {category}</Card.Text>
            <Card.Text>$USD{' '}{price}</Card.Text>
                <Link className='link-d' to={`/item/${id}`}>
                <Button variant="primary" >
                    Inspeccionar Articulo{'  '}<GiDutchBike/>
                </Button> 
            </Link>
            </Card.Body>
        </Card>
        </>
    )
}

export default Item