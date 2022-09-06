//native_react
import React from 'react'
//external
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//components
import './App.css';
import NavBar from './components/navBar/NavBar'
import ItemListConteiner from './components/itemListConteiner/ItemListConteiner';
import ItemDetailConteiner from './components/itemDetailConteiner/ItemDetailConteiner';
import Cart from './components/cart/Cart';
import Contact from './pages/Contact'
import  CartProvider  from './context/CartContext';

function App() {
  
  
  return (
    <>
      <BrowserRouter>
      <CartProvider>
        <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListConteiner/>}></Route>
            <Route path='/item/:id' element={<ItemDetailConteiner/>}></Route>
            <Route path='/category/:type' element={<ItemListConteiner/>}></Route>
            <Route path='/Cart' element={<Cart/>}></Route>
            <Route path='/Contact' element={<Contact/>}></Route>
            <Route path='*' element={<ItemListConteiner/>}></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
        {/* <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListConteiner/>}></Route>
          <Route path='/item/:id' element={<ItemDetailConteiner/>}></Route>
          <Route path='/category/:type' element={<ItemListConteiner/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path='*' element={<ItemListConteiner/>}></Route>
        </Routes> */}
    </>
  );
}

export default App;
