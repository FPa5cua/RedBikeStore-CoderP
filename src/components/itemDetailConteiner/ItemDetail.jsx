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
    const { id, img, name, brand, category, price, description, stock } = item

    const { AddToCart } = useContext(CartContext)
    const [count, setCount] = useState(0)
    const [goToCart, setGoToCart] = useState(false)
    
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const ToAdd =()=>{
        setMessage(`Agregaste: ${count + ' unidades de ' + item.name },   al carrito.`)
        const addedToCart = {
            id,
            name,
            price,
            img,
            quantity: count,
            TotalCost: item.price*count
        }
        /* console.log('addedTocart Content:', addedToCart) */
        setGoToCart(true)
        AddToCart(addedToCart)
        /* console.log(addedToCart) */
    } 

/*  console.log(CartContext)
    console.log(count)
    console.log(AddToCart)
    console.log(ToAdd)
    console.log(goToCart)
    console.log(item) */

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
                                    (<div>
                                        <span><p>{message}</p></span>
                                        <Button variant="primary" onClick={() => navigate('/cart')}>
                                        Ir al Carrito
                                        </Button>{' '}
                                        <Button variant="primary" onClick={() => navigate('/')}>
                                        Seguir Comprando
                                        </Button>
                                    </div>)
                                    : 
                                    (<div>
                                    <ItemCount count={count} setCount={setCount} stock ={stock} OnAdd={ToAdd}/>
                                    {' '}<Button variant="primary" onClick={() => navigate('/')}>
                                    Seguir Mirando
                                    </Button>
                                    </div>)
                                }
                        </Card.Body>
                    </Card>
                </Row>
            </div>
        </>
    )
}

export default ItemDetail