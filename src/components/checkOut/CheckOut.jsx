//native_react
import React, { useContext, useState} from 'react'
//external
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp, getFirestore } from 'firebase/firestore';
import Button from 'react-bootstrap/Button'
//components

const CheckOut = () => {
  return (
    <div>CheckOut</div>
  )
}

export default CheckOut