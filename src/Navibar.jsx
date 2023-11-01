import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import pic2 from './assets/chemsafe.gif'
import racing from './assets/racing.png'
import wipano from './assets/wipano.jpg'
import ptb from './assets/ptb.png';
import tubs from './assets/tubs.png';


export default function Navibar(){
  return(
    <>
  <Navbar bg="dark" expand="lg" className="justify-content-between navbar-expand-lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" >
    <Nav className="ml-auto">
      {/* <Nav.Link href="/home"> <span style={{color: '#bababa'}}>Home</span></Nav.Link> */}
      <Nav.Link href="/home2"><span >Home</span></Nav.Link>
      <Nav.Link href="/gym"><span >Me</span></Nav.Link>
      <NavDropdown title="Projects" id="basic-nav-dropdown" style={{color: '#bababa'}}>
        <NavDropdown.Item href="/chemsafe">
          <img
            src={pic2}
            alt="Person 1"
            style={{ width: '30px', marginRight: '10px' }}
          />
          <span style={{color: 'black'}}>Chemsafe</span>
        </NavDropdown.Item>
        <NavDropdown.Item href="/sphere">
        <img
            src={ptb}
            alt="Person 1"
            style={{ width: '30px', marginRight: '10px' }}
          />
          Automation
        </NavDropdown.Item>
        <NavDropdown.Item href="/data">
        <img
            src={ptb}
            alt="Person 1"
            style={{ width: '30px', marginRight: '10px' }}
          />
          Data Science
        </NavDropdown.Item>
        <NavDropdown.Item href="/wobracing">
          <img
            src={racing}
            alt="Person 2"
            style={{ width: '20px', marginRight: '10px' }}
          />
          wob-racing
        </NavDropdown.Item>
        <NavDropdown.Item href="/homeoffice">
        <img
            src={tubs}
            alt="Person 2"
            style={{ width: '20px', marginRight: '10px' }}
          />
        
          Home-Office Study
        </NavDropdown.Item>
        <NavDropdown.Item href="/master">
        <img
            src={tubs}
            alt="Person 2"
            style={{ width: '20px', marginRight: '10px' }}
          />
          Master Thesis
        </NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>

</>

  )
 

}