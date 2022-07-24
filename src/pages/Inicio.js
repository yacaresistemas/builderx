import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Inicio(props) {

    useEffect(() => {
      document.title = props?.title ? props?.title : 'BuilderX';
    });
    
    return (
      <>
        <main>
          <Container style={{marginTop: 30}}>
            <Row>
              <Col lg="4">
                En Inicio
              </Col>
            </Row>            
          </Container>
        </main> 
        <nav>
          <Link to="/temas">
            <Button variant="primary">Ir a Temas</Button>
          </Link>
        </nav>       
      </>
    );
  }

export default Inicio
