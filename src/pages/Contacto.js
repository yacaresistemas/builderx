import React, { useEffect } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TituloPagina from "../components/TituloPagina";

function Contacto(props) {

    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';
    });

    return (
      <>
        <main>
          <TituloPagina titulo="Contacto" />
          <Container style={{marginTop: 30}}>
            <Row>
              <Col lg="4">
                En Contacto
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

export default Contacto
