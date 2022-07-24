import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TemasList from "../components/TemasList";

function Temas(props) {
    useEffect(() => {
      document.title = props?.title ? props?.title : 'BuilderX';
    });

    return (
      <>
        <Container style={{marginTop: 30}}>
          <Row>
            <TemasList /> 
          </Row>            
        </Container>               
      </>
    );
  }

export default Temas
