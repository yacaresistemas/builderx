import React, { useEffect } from 'react'
import { Container, Row, Col, Card }  from 'react-bootstrap';
import TituloPagina from "../components/TituloPagina";
import Personaliza1 from "../img/personaliza1.webp";
import Personaliza2 from "../img/personaliza2.webp";
import Personaliza3 from "../img/personaliza3.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle, faRocket, faAddressBook } from '@fortawesome/free-solid-svg-icons'


function Personaliza(props) {
    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';
    });    

    return (
      <>
        <TituloPagina titulo="Personaliza tu Perfil" />
        <Container style={{marginTop: 30}}>          
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
      </>
    );
  }

export default Personaliza
