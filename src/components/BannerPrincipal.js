import React from 'react'
import { Container, Row,  Col, Carousel, Button }  from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight} from '@fortawesome/free-solid-svg-icons'
import Banner1 from "../img/banner_1.png";
import Banner2 from "../img/banner_2.webp";

const BannerPrincipal = (props) => {
    return (
      <Container style={{paddingTop: 60, paddingBottom: 80, backgroundColor: "#0F6972"}}>
        <Row>
          <Col lg="5" className='banner' style={{textAlign: "left", color:"#FFFFFF", paddingTop: 40}}>
            <h1>
              CREA TU PERFIL
            </h1>
            <h2>Impresionantes</h2>
            <h2>Llamativos diseños</h2>
            <h2>Facil de implementar</h2>
            
            <div style={{marginTop: 30}}>
              <Link to="/plantillas">
                <Button style={{fontSize: 20, backgroundColor: "#EC7313", borderColor: "#EC7313"}} >
                  Comienza ahora{' '}
                  <FontAwesomeIcon icon={faCircleArrowRight} /> 
                </Button>
              </Link>
            </div>
          </Col>
          <Col lg="7" style={{justifyContent: "center", alignItems: "center", textAlign: "center"}}>
            <Carousel controls={false} indicators={false}>
              <Carousel.Item  style={{justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <img
                  className="d-block"
                  src={Banner1}
                  style={{height: 330}}
                  alt=""
                />                      
              </Carousel.Item> 
              <Carousel.Item  style={{justifyContent: "center", alignItems: "center", textAlign: "center"}}>
                <img
                  className="d-block"
                  src={Banner2}
                  style={{height: 330}}
                  alt=""
                />                      
              </Carousel.Item>                    
            </Carousel>
          </Col>
        </Row>  
      </Container>
    )
}

export default BannerPrincipal