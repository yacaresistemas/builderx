import React, { useEffect } from 'react'
import { Container, Row, Col, Card }  from 'react-bootstrap';
import TituloPagina from "../components/TituloPagina";
import Paso1 from "../img/paso1.webp";


function ComoFunciona(props) {
    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';
    });    

    return (
      <>
        <TituloPagina titulo="Como Funciona" />
        <Container style={{marginTop: 30}}>          
          <Row>
            <Col lg="4">
              <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                  <div style={{backgroundColor: "#F3974F"}}>
                    <h3 style={{color: "#fff", textAlign: "center", paddingTop: 10}}>
                      1
                    </h3>
                  </div>
                  <img src={Paso1} style={{height: 250, width: "100%"}} alt="Mi blog" />
                  <Card.Body>
                  <Card.Title style={{textAlign: "center"}}>Mi blog</Card.Title>                                  
                </Card.Body>
              </Card>
            </Col>      
            <Col lg="4">
              <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                  <div style={{backgroundColor: "#EE8431"}}>
                    <h3 style={{color: "#fff", textAlign: "center", paddingTop: 10}}>
                      2
                    </h3>
                  </div>
                  <img src={Paso1} style={{height: 250, width: "100%"}} alt="Mi blog" />
                  <Card.Body>
                  <Card.Title style={{textAlign: "center"}}>Mi blog</Card.Title>                                  
                </Card.Body>
              </Card>
            </Col>   
            <Col lg="4">
              <Card style={{ width: '100%',  marginTop: 20, textAlign: "left" }}>
                  <div style={{backgroundColor: "#EA7417"}}>
                    <h3 style={{color: "#fff", textAlign: "center", paddingTop: 10}}>
                      3
                    </h3>
                  </div>
                  <img src={Paso1} style={{height: 250, width: "100%"}} alt="Mi blog" />
                  <Card.Body>
                  <Card.Title style={{textAlign: "center"}}>Mi blog</Card.Title>                                  
                </Card.Body>
              </Card>
            </Col>         
          </Row>            
        </Container>               
      </>
    );
  }

export default ComoFunciona
