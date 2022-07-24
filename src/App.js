import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'


function App() {
  const style = {
    color: "white",
  };

  return (
    <Navbar expand="lg" style={{backgroundColor: "#0F6972"}}>
      <Container>
        <Navbar.Brand href="#inicio" style={{color: "#FFFFFF", fontSize: 28}}>
          BuilderX
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="sitio-nav" />
        <Navbar.Collapse id="sitio-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#inicio" style={style}>Inicio</Nav.Link>
            <Nav.Link href="#temas" style={style}>Temas</Nav.Link>
            <Nav.Link href="#contacto" style={style}>Contacto</Nav.Link>            
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <Nav.Link href="#ingresar">
            <Button style={{backgroundColor: 'transparent', color: "white", borderColor: "#FFFFFF"}}>
              <FontAwesomeIcon icon={faUser} /> Ingresar
            </Button>
          </Nav.Link>
          <Nav.Link href="#registrarse">
            <Button style={{backgroundColor: "#D88317", color: "white", borderColor: "#D88317"}}>
              <FontAwesomeIcon icon={faUserPlus} /> Registrarse
            </Button>
          </Nav.Link>       
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
