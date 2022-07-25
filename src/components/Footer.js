import React from 'react'
import { Container, Row, Col }  from 'react-bootstrap';

const Footer = (props) => {
    return (
        <Container fluid style={{backgroundColor: "#0F6972", marginTop: 67, paddingTop: 15, paddingBottom: 0}}>
          <Row>
            <Col>
              <p style={{color: "#FFFFFF"}}>Todos los derechos reservados</p>
            </Col>
          </Row>
        </Container>
    )
}

export default Footer