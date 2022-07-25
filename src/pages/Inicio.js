import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BannerPrincipal from '../components/BannerPrincipal'


function Inicio(props) {

    useEffect(() => {
      document.title = props?.title ? props.title : 'BuilderX';
    });
    
    return (
      <>
        <main>
          <Container fluid style={{marginTop: 60, marginBottom: 100, backgroundColor: "#0F6972"}}>
            <BannerPrincipal />
          </Container>
        </main> 
        <nav>
          <Link to="/plantillas" >
            <Button variant="primary">Ir a Plantillas</Button>
          </Link>
        </nav>       
      </>
    );
  }

export default Inicio
