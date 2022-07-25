import React from 'react'
import { Container, Row, Col }  from 'react-bootstrap';

const TituloPagina = (props) => {
    return (
        <Container fluid style={{backgroundColor: "#075A63", marginTop: 67, paddingTop: 15, paddingBottom: 10}}>
          <Row>
            <Col className='tituloPagina'>
              <h3 style={{color: "#FFFFFF"}}>{props.titulo}</h3>
            </Col>
          </Row>
        </Container>
    )
}

export default TituloPagina