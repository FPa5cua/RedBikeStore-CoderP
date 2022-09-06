//native_react
import React from 'react'
import { useState, useEffect } from 'react'
//external
import { useParams } from 'react-router-dom'
import { SpinnerCircularFixed} from 'spinners-react'
import { db } from '../../firebase/firebase'
import { collection, doc, getDoc, } from "firebase/firestore"
//components
import ItemDetail from './ItemDetail'

const ItemDetailConteiner = () => {

  const [item, setItem]= useState({});
  const {id}= useParams()
  
  const [loading, setLoading]= useState(false)

    useEffect(()=>{
      const itemDetilCollection= collection(db, "items")
      const docRef= doc(itemDetilCollection, id)
      getDoc(docRef)
        .then((res)=>{
          setItem({
            id:res.id,
            ...res.data(),
          })
        })
        .catch((error) => console.log(error))
        .finally(()=> setLoading(true))
    },[id])

  return (
    <>
    {loading ? <ItemDetail item={item}/> : <SpinnerCircularFixed size={57} thickness={123} speed={160} color="rgba(172, 124, 57, 1)" secondaryColor="rgba(172, 57, 57, 1)" />}
    </>
    )
}

export default ItemDetailConteiner