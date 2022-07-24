import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import { Routes, Route, Outlet, NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Tema1 from "../img/tema1.png";


function Inicio() {
    return (
      <>
        <main>
          <Container style={{marginTop: 30}}>
            <Row>
              <Col lg="4">
                <Card style={{ width: '18rem' }}>
                  <img src={Tema1} style={{height: 250}} />
                  <Card.Body>
                    <Card.Title>Tema 1</Card.Title>
                    <Card.Text>
                      Personalizar el tema 1
                    </Card.Text>
                    <Button variant="primary">Ver</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col lg="4">
                2 of 3
              </Col>
              <Col lg="4">
                3 of 3
              </Col>
            </Row>            
          </Container>
        </main>        
      </>
    );
  }

export default Inicio
