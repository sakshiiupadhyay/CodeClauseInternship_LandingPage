import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function AppNavbar() {

  const backgroundImageUrl = 'https://t3.ftcdn.net/jpg/00/86/56/12/360_F_86561234_8HJdzg2iBlPap18K38mbyetKfdw1oNrm.jpg';

  return (
    <>
    <Navbar variant="dark" expand="lg" className='fixed-top'
    style={{backgroundImage: `url(${backgroundImageUrl})`, height: '70px'}}>
      <Container>
        <Navbar.Brand href="/">ShoppingTime </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ml-auto'>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
</>
  );
}

export default AppNavbar;
