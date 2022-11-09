import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers} from '@fortawesome/free-solid-svg-icons';
import {faUtensils, faChair, faClipboard} from '@fortawesome/free-solid-svg-icons';
import {faAppleAlt,faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import "../assets/css/Login.css";

class Main2 extends Component {
  
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
            <NavDropdown title="Matenedor" id="basic-nav-dropdown">
              <NavDropdown.Item href="/dashboard"><strong>Usuarios</strong>&nbsp; &nbsp;<FontAwesomeIcon id="usersi" icon={faUsers} className="fa-bounce"/></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/productos">
              <strong>Productos </strong>  &nbsp;&nbsp;<FontAwesomeIcon id="apple" icon={faAppleAlt} className="fa-bounce" />
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/menus"><strong>Menús</strong>  &nbsp;&nbsp;<FontAwesomeIcon  id="servis" icon={faUtensils} className="fa-bounce"/></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/recetas"><strong>Recetas</strong>  &nbsp;&nbsp;<FontAwesomeIcon  id="clipboar" icon={faClipboard} className="fa-bounce"/></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/mesas">
              <strong>Mesas</strong> &nbsp;&nbsp;<FontAwesomeIcon  id="mesas" icon={faChair} className="fa-bounce"/>
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

export default Main2;