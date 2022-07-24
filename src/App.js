import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'


import Inicio from './pages/Inicio'
import Temas from './pages/Temas'
import Contacto from './pages/Contacto'
import Ingresar from './pages/Ingresar'
import Registrarse from './pages/Registrarse'

function App() {
  const navTexto = {
    color:  "#FFFFFF",
    fontSize: 16
  }

  const navBotonTexto = {
    backgroundColor: 'transparent', 
    color: "white", 
    borderColor: "#FFFFFF"
  }

  return (
    <div className="App">
      <Navbar expand="lg" style={{backgroundColor: "#0F6972"}}>
        <Container>
          <LinkContainer to="/" style={{color: "#FFFFFF", fontSize: 28}}>
            <Navbar.Brand >
              BuilderX
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="sitio-nav" />
          <Navbar.Collapse id="sitio-nav" className="justify-content-center">
            <Nav>
              <LinkContainer to="/"  style={navTexto}>
                  <Nav.Link >Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/temas" style={navTexto}>
                  <Nav.Link>Temas</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contacto" style={navTexto}>
                  <Nav.Link>Contacto</Nav.Link>
              </LinkContainer>    
            </Nav>
          </Navbar.Collapse>
          <Nav>
            <LinkContainer to="/ingresar">
              <Nav.Link>
                <Button style={navBotonTexto}>
                  <FontAwesomeIcon icon={faUser} /> Ingresar
                </Button>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/registrarse">
              <Nav.Link>
                <Button style={navBotonTexto}>
                  <FontAwesomeIcon icon={faUserPlus} /> Registrarse
                </Button>
              </Nav.Link>
            </LinkContainer>              
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Inicio title="BuilderX" />} />
        <Route path="builderx" element={<Inicio title="BuilderX" />} />
        
        <Route path="temas" element={<Temas title="Temas"/>} />
        <Route path="contacto" element={<Contacto title="Contacto" />} />
        <Route path="ingresar" element={<Ingresar title="Ingresar" />} />
        <Route path="registrarse" element={<Registrarse title="Registrarse" />} />
      </Routes>
    </div>
  );
}

export default App;