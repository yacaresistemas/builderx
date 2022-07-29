import React from 'react'
import { Container, Button, Nav, Navbar }  from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { LinkContainer } from 'react-router-bootstrap'



const navTexto = {
  color:  "#FFFFFF",
  fontSize: 16,
  marginLeft: 10,
  marginRight: 10
}

const navBotonIngresar = {
  backgroundColor: 'transparent', 
  color: "white", 
  borderColor: "#FFFFFF"
}

const navBotonRegistrarse = {
  backgroundColor: "#EC7313", 
  borderColor: "#EC7313",
  color: "white"  
}

const LogOut = () => {
  //const nav = useNavigate();

  sessionStorage.removeItem('usuarioId');
  sessionStorage.removeItem('usuarioNombre');

  window.location = 'ingresar';

  //nav("/");

};
export default class BarraNavegacion extends React.Component {

  componentDidMount() {
    console.log("Otro");
  }

  render() {

    const usuarioId = sessionStorage.getItem("usuarioId");
    const usuarioNombre = sessionStorage.getItem("usuarioNombre");

    return (
      <Navbar fixed="top" expand="lg" style={{backgroundColor: "#0F6972"}}>
        <Container>
          <LinkContainer to="/" style={{color: "#FFFFFF", fontSize: 28}}>
            <Navbar.Brand >
              BuilderX
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="sitio-nav" />
          <Navbar.Collapse id="sitio-nav" className="justify-content-end">
            <Nav>
              <LinkContainer to="/"  style={navTexto}>
                  <Nav.Link >Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/personaliza" style={navTexto}>
                  <Nav.Link>Personaliza tu Perfil</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/plantillas" style={navTexto}>
                  <Nav.Link>Plantillas</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/como-funciona" style={navTexto}>
                  <Nav.Link>Como Funciona?</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/blog" style={navTexto}>
                  <Nav.Link>Blog</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contacto" style={navTexto}>
                  <Nav.Link>Contacto</Nav.Link>
              </LinkContainer>    
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            
            {
              usuarioId ? 
              <Nav>
                <LinkContainer to="/ingresar">
                  <Nav.Link>
                    <Button style={navBotonIngresar}>
                      <FontAwesomeIcon icon={faUser} style={{marginRight: 10}} />{usuarioNombre}
                    </Button>
                  </Nav.Link>
                </LinkContainer> 
                <Nav.Link>
                  <Button onClick={LogOut}>
                    Salir
                  </Button>
                </Nav.Link>             
              </Nav>               
              : 
              <Nav>
                <LinkContainer to="/ingresar">
                  <Nav.Link>
                    <Button style={navBotonIngresar}>
                      <FontAwesomeIcon icon={faUser} /> Ingresar
                    </Button>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to="/registrarse">
                  <Nav.Link>
                    <Button style={navBotonRegistrarse}>
                      <FontAwesomeIcon icon={faUserPlus} /> Registrarse
                    </Button>
                  </Nav.Link>
                </LinkContainer>
              </Nav>
            }
                      
          </Navbar.Collapse>
        </Container>
      </Navbar>       
    )
  }


}
