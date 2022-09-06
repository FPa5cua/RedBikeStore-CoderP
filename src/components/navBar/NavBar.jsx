//native_react
import React from 'react'
//external
import { Link } from 'react-router-dom' 
import NavDropdown from 'react-bootstrap/NavDropdown'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
//components
import bikeStoreLogo from '../../img/bikeStoreLogo.svg'
import CartWidget from '../widgets/CartWidget'



const NavBar = () => {

      return(
          <Navbar bg="light" variant="light">
          <Container>
          <img src={ bikeStoreLogo } height="50" width="auto" />{' '}
          <Navbar.Brand as={Link} to='/'>
              BikeStore
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/'>Home</Nav.Link>
              <Nav.Link as={Link} to='/Contact'>Contact</Nav.Link>
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to='/category/Bicicleta'>Bicicletas</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Manillares'>Manillares</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Avances'>Avances</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Frenos'>Frenos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Asientos'>Asientos</NavDropdown.Item>
                <NavDropdown.Item as={Link} to='/category/Kits'>Kits</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to='/'>Todos los Productos</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link as={Link} to='/Cart'>
            <CartWidget/>
              {/* {context.cart.length ? <CartWidget/> : null} */} 
            </Nav.Link>
          </Navbar.Collapse>
          </Container>
        </Navbar>
      );
  }

  export default NavBar