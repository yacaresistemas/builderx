import React from 'react'
import Plantilla1 from "../img/plantilla1.png";
import Plantilla2 from "../img/plantilla2.jpg";
import { Col, Card, Button}  from 'react-bootstrap'; 

const arrayPlantillas = [
    { id: 1, src: Plantilla1, titulo: "Plantilla Nice", descripcion: "Personaliza la Plantilla Nice" },
    { id: 2,  src: Plantilla2, titulo: "Plantilla Hot", descripcion: "Personalizar la Plantilla Hot" },
  ];
  
const PlantillasList = () => {
    return (
        <>
        {
            arrayPlantillas.map(({ id, src, titulo, descripcion }) => (
                <Col lg="4" key={id}>
                    <Card style={{ width: '18rem', alignItems: 'center' }}>
                        <img src={src} style={{height: 350, width: 250}} alt={titulo} />
                        <Card.Body>
                        <Card.Title>{titulo}</Card.Title>
                        <Card.Text>
                            {descripcion}
                        </Card.Text>
                        <Button variant="primary">Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))
        }
        
                       
        </>
    )
}

export default PlantillasList
