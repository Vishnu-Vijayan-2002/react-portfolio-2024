import React from 'react'
import './Header.css' 
import { Container, Stack } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <Navbar expand="lg" className="navbar">
      <Container>
     <Navbar.Brand><Link to={'/'} style={{color:'orange',fontSize:'25px',textDecoration:'none'}}>Portfolio</Link></Navbar.Brand>        
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-3 links">
            <Link className='linke-list1' to={'/'} style={{color:'white',textDecoration:'none',marginRight:'10px'}}>Home</Link>
            <Link className='linke-list2' to={'/project'} style={{color:'white',textDecoration:'none',marginRight:'10px'}}>Project</Link>
            <Link className='linke-list3' to={'/about'} style={{color:'white',textDecoration:'none',marginRight:'10px'}}>About</Link>
            <Link className='linke-list4' to={'/contact'} style={{color:'white',textDecoration:'none',marginRight:'10px'}}>Contact</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
