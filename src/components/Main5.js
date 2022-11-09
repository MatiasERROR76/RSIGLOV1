import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faMugHot} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import "../assets/css/Login.css";

class Main5 extends Component {
  
    render() {
      var name = localStorage.getItem('name')

        return (
            <React.Fragment>

<Navbar bg="light" expand="lg">
      <Container>
        
        <Navbar.Brand href="/main">Restaurant SIGLO XXI</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
      
          &nbsp; 
          <NavDropdown title="Pedidos" id="basic-nav-dropdown">
            <NavDropdown.Item href="/pedidos">
              <strong>Ver pedidos </strong>  &nbsp;&nbsp;<FontAwesomeIcon id="tecito" icon={faMugHot} className="fa-bounce" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         <br></br>
         <div>
          <p>Hola,&nbsp;{name}</p>
          <Link to="/logout"><FontAwesomeIcon  icon={faRightFromBracket} /> Cerrar sesión</Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  
    
       
         
            </React.Fragment>
            
        );
    }
}

export default Main5;