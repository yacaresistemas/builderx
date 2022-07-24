import React from 'react'
import Tema1 from "../img/tema1.png";
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const arrayTemas = [
    { id: 1, src: Tema1, titulo: "Tema 1", descripcion: "Personalizar el tema 1" },
    { id: 2,  src: Tema1, titulo: "Tema 2", descripcion: "Personalizar el tema 2" },
  ];
  
const TemasList = () => {
    return (
        <>
        {
            arrayTemas.map(({ id, src, titulo, descripcion }) => (
                <Col lg="4" key={id}>
                    <Card style={{ width: '18rem' }}>
                        <img src={src} style={{height: 250}} alt={titulo} />
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

export default TemasList
