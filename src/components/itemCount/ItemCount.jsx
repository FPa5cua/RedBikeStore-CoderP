//native_react
import React from 'react'
//external
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import { RiShoppingCartLine } from 'react-icons/ri'

const ItemCount = ({count, setCount, stock, OnAdd}) => {

  const handleAdd1 =()=> {
      if(count < stock) {
          setCount(count + 1)
          console.log("+1 item")
      }
  }

  const handlesubstract1 =()=> {
      if(count > 0) {
          setCount(count - 1)
          console.log("-1 item")
      }
  }

 /*  useEffect(() => {
    setCount(parseInt(count))
  }, [count]); */

  return (
    <>
    <div>
    <Button variant="danger" onClick={handlesubstract1} >-</Button>{' '}
    <span><Badge bg="light" text="dark">{count}</Badge></span>{' '}
    <Button variant="success" onClick={handleAdd1}>+</Button>
    </div>
    <br/>
    <Button variant="primary" onClick={()=>OnAdd(count)}>Agregar al <RiShoppingCartLine/> </Button> 
    </>
  )
}

export default ItemCount