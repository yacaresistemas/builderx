import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap'


import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const style2 = {
    color: "white",
  };


  return (
    <div className="App">
      <Navbar expand="lg" style={{backgroundColor: "#0F6972"}}>
        <Container>
          <Navbar.Brand href="#inicio" style={{color: "#FFFFFF", fontSize: 28}}>
            BuilderX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="sitio-nav" />
          <Navbar.Collapse id="sitio-nav" className="justify-content-center">
            <Nav>
              <LinkContainer to="/">
                  <Nav.Link>Inicio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/temas">
                  <Nav.Link>Temas</Nav.Link>
              </LinkContainer>

             {/*  <Nav.Link href="/" style={style2}>Inicio</Nav.Link>
              <Nav.Link href="/temas" style={style2}>Temas</Nav.Link>             
              <Nav.Link href="#contacto" style={style2}>Contacto</Nav.Link>      */}       
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
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="temas" element={<Temas />} />
      </Routes>
    </div>
  );
}

function Inicio() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <Link to="/temas">Temas</Link>
      </nav>
    </>
  );
}

function Temas() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Inicio</Link>
      </nav>
    </>
  );
}

export default App;

/*
const Layout = () => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
  });

  const style2 = {
    color: "white",
  };

  return (
    <>      
      <Navbar expand="lg" style={{backgroundColor: "#0F6972"}}>
        <Container>
          <Navbar.Brand href="#inicio" style={{color: "#FFFFFF", fontSize: 28}}>
            BuilderX
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="sitio-nav" />
          <Navbar.Collapse id="sitio-nav" className="justify-content-center">
            <Nav>
              <Nav.Link href="/" style={style2}>Inicio</Nav.Link>
              <Nav.Link href="/temas" style={style2}>Temas</Nav.Link>             
              <Nav.Link href="#contacto" style={style2}>Contacto</Nav.Link>            
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

      <main style={{ padding: '1rem 0' }}>
        <Outlet />
      </main>
    </>
  );
};

function Inicio() {
  return (
    <Container>
      <Row>
        <Col>En Inicio</Col>
      </Row>
    </Container>
  );
}

const Temas = () => {
  return (
    <>
      <h2>en Temas</h2>
    </>
  );
};


const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="" element={<Inicio />} />
        <Route path="temas" element={<Temas />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

*/

/*
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
*/

//export default App;
