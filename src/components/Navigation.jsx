import React from 'react'
import { Container, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';


const Navigation = () => {
  return (
    <Navbar className="custom-navbar">
      
        <Container className="container ">
        <div>
        <Link to="/" className="text-white ms-3 text-decoration-none" >
        🏠Home
        </Link>
        <Link to="/contact" className="text-white ms-3 text-decoration-none" >
        📞Contact
        </Link>
        </div>
        <Navbar.Brand className="text-white" >🧁Happy Cake🧁</Navbar.Brand> 
        </Container>
    </Navbar>

  )
}

export default Navigation;