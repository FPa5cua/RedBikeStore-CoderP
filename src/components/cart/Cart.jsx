//native_react
import React, { useContext } from 'react'
//external
import { useNavigate } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
//components
import { CartContext } from '../../context/CartContext'
import CartProducts  from './CartProducts'




const Cart = () => {
  
  const context = useContext(CartContext)
  const navigate = useNavigate()

  return(
          <>

          {context.cart.length ? 
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody> 
            <tr>
              <td>
                {context.cart.map((item, index)=> {
                    return (
                      <CartProducts 
                      key={index} 
                      items={item}
                      quantity={item.quantity}
                      id={item.id}
                      price={item.price}
                      name={item.name}
                      img={item.img}
                      totalPerProduct={context.TotalCostPerProd} />
                    );
                })}
              </td>
            </tr>
          </tbody>
            <div className="table_foot">
            <Button variant="danger" onClick={context.ClearCart}>Eliminar todo el carrito</Button>
            <span className="cart_total">Costo Total: U$D {context.totalAmount}</span>
            <Button variant="primary" onClick={()=> navigate('/Checkout')}> Finalizar compra </Button>
            <Button variant="primary" onClick={()=>navigate('/')}>Seguir comprando</Button>
            </div>
        </Table> : 
        <div className="enty_cart">
            <p>El carrito esta vacio</p>
            <button id='button04'onClick={()=>navigate('/categorias')}>Ir a Comprar</button>
        </div>
        }
            {/* {context.cart.length ? 
              <div>
                <ul>
                    <li></li>
                    <li>Nombre</li>
                    <li>Precio</li>
                    <li>Cantidad</li>
                    <li>Total</li>
                </ul>
              </div> 
              {context.cart.map((item, index) => {
                return(
                  <CartProducts 
                  key={index} 
                  items={item}
                  quantity={item.quantity}
                  id={item.id}
                  price={item.price}
                  name={item.name}
                  img={item.img}
                  totalPerProduct={TotalCostPerProd} />
                )
              })}
              <div>
                <div>
                  <span>Total: ${TotalCartCost}</span>
                  <br/>
                  <Button variant="danger" onClick={ClearCart}>Vaciar Carrito</Button>
                </div>
                <div> 
                  <Button variant= "primary" onClick= {() => navigate('/CheckOut')}> 
                  Confirmar Compra </Button>
                </div>
              </div> :
              <div>
                <h2>No has agregado nada a tu carrito, aun</h2>
                <Button variant= "primary" onClick= {() => navigate('')}>Volver al inicio</Button>
              </div>
            } */}
          </>
  )
};

export default Cart

