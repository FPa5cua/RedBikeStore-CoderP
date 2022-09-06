//native_react
import React, { useState, useContext } from 'react'
//external
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
//components
import ItemCount from '../itemCount/ItemCount'
import { CartContext } from '../../context/CartContext'


const ItemDetail = ({item}) => {
    const { id, img, name, brand, category, price, description, stock }= item
    
    const [count, setCount] = useState(1)

    const navigate = useNavigate()
    
    const [goToCart, setGoToCart] = useState(false)
    /* const { AddToCart } = useContext(CartContext) */
    /* const { AddToCart }= useCart() */
    const context = useContext(CartContext)
    
    const [message, setMessage] = useState('');
    
    const onAdd = (count) => {
        /* setMessage(`Agregaste ${count + ' ' + item.name}   al carrito`) */
        setGoToCart(true)
        let addedData= {
            quantity:count,
            product: item.name,
            id: item.id,
            price: item.price,
            img: item.img,
            description: item.description,
            totalAmount: item.price*count
        }
        console.log(addedData)
    } 
    console.log(context)

    return (
        <>
            <div>
                <Row className="justify-content-md-center">
                    <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={img} />  
                        <Card.Body>
                            <Card.Title>Nombre:{' '}{name}</Card.Title>
                            <Card.Text>Descripcion del producto:{' '}{description}</Card.Text>
                            <ListGroup className="list-group-flush">  
                                <Card.Text>Marca:{' '}{brand}</Card.Text>
                                <Card.Text>Categoria:{' '}{category}</Card.Text>
                                <Card.Text>Stock disponible: {stock}</Card.Text>
                                <Card.Text>ID:{' '}{id}</Card.Text>
                                <h5>US${price}</h5> 
                            </ListGroup>
                                {goToCart ? 
                                    (<Button variant="primary" onClick={() => navigate('/cart')}>
                                    Ir al Carrito
                                    </Button>)
                                    : 
                                    (<ItemCount count={count} setCount={setCount} stock ={stock} OnAdd={onAdd}/>)
                                }
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </>
    )
}

export default ItemDetail