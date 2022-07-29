import React, { useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import BannerPrincipal from '../components/BannerPrincipal';
import Personaliza1 from "../img/personaliza1.webp";
import Personaliza2 from "../img/personaliza2.webp";
import Personaliza3 from "../img/personaliza3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faRocket, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import Paso1 from "../img/paso1.webp";


function Inicio(props) {

    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';

      var usuarioNombre = sessionStorage.getItem("usuarioNombre");
      var usuarioId = sessionStorage.getItem("usuarioId");
      console.log("usuarioNombre:"+usuarioNombre);
      console.log("usuarioId:"+usuarioId);
      
    });
    
    return (
      <>
        <main>
          <Container fluid style={{marginTop: 60, marginBottom: 50, backgroundColor: "#0F6972"}}>
            <BannerPrincipal />
          </Container>
        </main> 
        <Container style={{marginTop: 0}}>          
          <Row>
            <Col lg="4">
              <Card style={{ width: '100%',  marginTop: 20, textAlign: "center", paddingTop: 30 }}>
                  <FontAwesomeIcon icon={faUserCircle} style={{fontSize: 60}} />
                  <Card.Title style={{textAlign: "center", marginTop: 10}}>
                    Es facil e interactivo  
                  </Card.Title>                                                    
                  <Card.Body>
                  <img src={Personaliza1} style={{height: 250}} alt="Mi blog" />
                  </Card.Body>
              </Card>
            </Col>      
            <Col lg="4">
              <Card style={{ width: '100%',  marginTop: 20, textAlign: "center", paddingTop: 30 }}>
                  <FontAwesomeIcon icon={faRocket} style={{fontSize: 60}} />
                  <Card.Title style={{textAlign: "center", marginTop: 10}}>
                    Es facil e interactivo  
                  </Card.Title>                                                    
                  <Card.Body>
                  <img src={Personaliza2} style={{height: 250}} alt="Mi blog" />
                  </Card.Body>
              </Card>
            </Col> 
            <Col lg="4">
              <Card style={{ width: '100%',  marginTop: 20, textAlign: "center", paddingTop: 30 }}>
                  <FontAwesomeIcon icon={faAddressBook} style={{fontSize: 60}} />
                  <Card.Title style={{textAlign: "center", marginTop: 10}}>
                    Es facil e interactivo  
                  </Card.Title>                                                    
                  <Card.Body>
                  <img src={Personaliza3} style={{height: 250}} alt="Mi blog" />
                  </Card.Body>
              </Card>
            </Col>        
          </Row>            
        </Container>  
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

export default Inicio
