import React, { useEffect } from 'react'
import { Container, Row }  from 'react-bootstrap';
import PlantillasList from "../components/PlantillasList";
import TituloPagina from "../components/TituloPagina";


function Plantillas(props) {
    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';
    });

    return (
      <>
        <TituloPagina titulo="Plantillas" />
        <Container style={{marginTop: 30}}>          
          <Row>
            <PlantillasList /> 
          </Row>            
        </Container>               
      </>
    );
  }

export default Plantillas
