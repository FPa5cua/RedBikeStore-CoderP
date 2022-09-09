//native_react
import React from 'react'
//external
import Row from 'react-bootstrap/Row'
//components
import Item from "./Item"

const ItemList = ({itemList}) => {

    return (

        <Row className="justify-content-md-center">
            {itemList.map((item)=>(
                <Item key={item.id} item={item}/>
            ))} 
        </Row>
    )
}

export default ItemList