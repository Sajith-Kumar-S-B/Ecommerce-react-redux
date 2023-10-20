import React from 'react'
import {Nav,Navbar,Container,Badge} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'


function Header() {
   const wishlist = useSelector((state)=>state.wishlistReducer)
   const cart = useSelector((state)=>state. cartReducer)
  return (
    <Navbar expand="lg" className="bg-body-tertiary position-fixed top-0 w-100 mb-5 z-1">
    <Container>
      <Navbar.Brand><Link to={'/'} style={{textDecoration:'none',color:'black',fontWeight:'bold'}}><i className="fa-solid fa-truck-fast me-2"></i>
      E-Cart</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='btn border rounded'><Link className='d-flex justify-content-center align-items-center' to={'/wishlist'} style={{textDecoration:'none',color:'black'}}><i className="fa-solid fa-heart me-2" style={{color: "#FF5733"}}></i>
          Wishlist
          <Badge className='ms-2 rounded bg-secondary' >{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link className='btn border rounded ms-3'><Link className='d-flex justify-content-center align-items-center' to={'/cart'} style={{textDecoration:'none',color:'black'}}><i class="fa-solid fa-cart-shopping me-2" style={{color: "#C70039"}}></i>
          Cart
          <Badge className='ms-2 rounded' bg="secondary">{cart.length}</Badge></Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header