//native_react
import React, { useContext, useState} from 'react'
//external
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp, getFirestore } from 'firebase/firestore';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup'
import { CartContext } from '../../context/CartContext';
//components
import { db } from '../../firebase/firebase'

const CheckOut = () => {

  const navigate = useNavigate() 
  const context = useContext(CartContext)
  const [orderId, setOrderId] = useState('')
  const [buyer, setBuyer] = useState({})


  const ClientData = (event) =>{
    setBuyer({
      ...buyer,
      [event.target.name]: event.target.value,
      [event.target.email]: event.target.value,
      [event.target.phone]: event.target.value,
      [event.target.address]: event.target.value,
      [event.target.deliveryMethod]: event.target.value,
      [event.target.paymentMethod]: event.target.value,
    })
  }

  const SendBuyRequest = (event) =>{
    event.preventDefault()
    const SellTicket = collection(db, "Sells")
    addDoc(SellTicket, {
      items: context.cart,
      total: context.TotalCost,
      date: serverTimestamp()
    })
    .then ((res) => {
      setOrderId(res.id)
      if(res) {
        context.ClearCart()
      }
    })
    .catch ((error)=> console.log(error))
  }



  return (
    <>
    <div class="sectionTitle">CheckOut</div>
    {!orderId ? 
    (<form>
        <InputGroup className="mb-3">
          <InputGroup.Text name='name' onChange={ClientData}>Nombre de Usuario</InputGroup.Text>
          <Form.Control
            placeholder="Juan Perez DelTomato"/>
        </InputGroup>

        
        <InputGroup className="mb-3">
          <InputGroup.Text name='email' onChange={ClientData}>Email</InputGroup.Text>
          <Form.Control
            placeholder="TuEmail@RedBike.com"/>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text name='phone' onChange={ClientData}>Numero de Telefono</InputGroup.Text>
          <Form.Control id="basic-url" 
          placeholder="099 666 333/ 2355 85 25 85"/>
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Text name='address' onChange={ClientData}>Direccion</InputGroup.Text>
          <Form.Control 
          placeholder="Siempre viva 3655 - CodigoPostal"/>
        </InputGroup>

        <Form.Select onChange={ClientData}>
          <option>Metodo De Envio</option>
          <option value="Cadeteria">Cadeteria</option>
          <option value="RetiroEnLocal">Retiro En Local</option>
        </Form.Select>
        <br/>
        <Form.Select onChange={ClientData}>
          <option>Metodo De Pago</option>
          <option value="MercadoPago">MercadoPago</option>
          <option value="PayPal">PayPal</option>
          <option value="Efectivo">Efectivo</option>
        </Form.Select>
        <Button variant="primary" onClick={SendBuyRequest}>
            Confirmar Compra
        </Button>
      </form>) 
      :
      (<div>
          <h3>Gracias por su compra</h3>
          <br/>
          <Button variant="primary" onClick={() => navigate('/')}>
            Home
          </Button>
        </div>)
      }

    </>
  )
}

export default CheckOut