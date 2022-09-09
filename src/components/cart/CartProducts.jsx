//native_react
import React, { useContext } from 'react'
//external
import Button from 'react-bootstrap/Button'
import Figure from 'react-bootstrap/Figure'
import ListGroup from 'react-bootstrap/ListGroup'
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge'
//components
import { CartContext } from '../../context/CartContext'


const CartProducts = (item) => {

    const context = useContext(CartContext)
    const DeleteProdct = (id) => {
        context.RemoveFromCart(id)
    }

    return (
    <div>
        <ListGroup horizontal>
            <ListGroup.Item >
                <Figure>
                    <Figure.Image width={171} height={180}
                    src={item.img}/>
                </Figure>
            </ListGroup.Item>
            <ListGroup.Item>{item.name}</ListGroup.Item>
            <ListGroup.Item>U$D: {item.price}</ListGroup.Item>
            <ListGroup.Item>{item.quantity}</ListGroup.Item>
            <ListGroup.Item>{item.totalAmount}</ListGroup.Item>
            <Button variant="danger" size='sm' onClick={() => DeleteProdct(item.id)}>Quitar del carrito</Button>
        </ListGroup>
    </div>
    )
}

export default CartProducts