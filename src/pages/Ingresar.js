import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Ingresar() {
    return (
      <>
        <main>
          <Container style={{marginTop: 30}}>
            <Row>
              <Col lg="4">
                En Ingresar
              </Col>
            </Row>            
          </Container>
        </main> 
        <nav>
          <Link to="/">
            <Button variant="primary">Ir a Inicio</Button>
          </Link>
        </nav>       
      </>
    );
  }

export default Ingresar
