//native_react
import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//external
import { db } from '../../firebase/firebase'
import { collection, doc, getDocs, query, where } from "firebase/firestore"
import { SpinnerCircularFixed} from 'spinners-react';
//components
import ItemList from './ItemList'


const ItemListConteiner = () => {
    console.log("ItemListConteiner presente")
    
    const { type }= useParams()


    const [itemList, setItemList]= useState([])
    const [loading, setLoading]= useState(true)


    useEffect(()=> {
        const q = type ? query(collection(db, "items"),where("category", "==", type)) 
        :
        collection(db, "items")       
        
        getDocs(q)
            .then((res) =>{
                const fbItemList = res.docs.map((fbItem)=> {
                    return{
                        id: fbItem.id,
                        ...fbItem.data()
                    }
                })
                console.log(fbItemList)
                setItemList(fbItemList)
            })
            .catch(()=> console.log('pasaron cosas :/ intentalo mas tarde'))
            .finally(()=> setLoading(false))
    },[type])
    
    return (
        <div>
            {loading ? (
                <SpinnerCircularFixed size={57} thickness={123} speed={160} color="rgba(172, 124, 57, 1)" secondaryColor="rgba(172, 57, 57, 1)" /> 
            ):(
                <ItemList itemList={itemList}/>
            )}
        </div>
        
  )
}

export default ItemListConteiner