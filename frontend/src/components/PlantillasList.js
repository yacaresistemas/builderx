import React from 'react'
import { Col, Card, Button}  from 'react-bootstrap'; 
import Plantilla1 from "../img/plantilla1.png";
import Plantilla2 from "../img/plantilla2.jpg";

const arrayPlantillas = [
    { id: 1, imagen: Plantilla1, titulo: "Plantilla Nice", descripcion: "Personaliza la Plantilla Nice" },
    { id: 2,  imagen: Plantilla2, titulo: "Plantilla Hot", descripcion: "Personalizar la Plantilla Hot" },
  ];

export default class PlantillasList extends React.Component {
    
    
    render() {
        return (
            arrayPlantillas.map(({ id, nombre, resumen, imagen }) => (
                <Col lg="4" key={id}>
                    <Card style={{ width: '18rem', alignItems: 'center', marginTop: 20 }}>
                        <img src={imagen} style={{height: 350, width: 250}} alt={nombre} />
                        <Card.Body>
                        <Card.Title>{nombre}</Card.Title>
                        <Card.Text>
                            {resumen}
                        </Card.Text>
                        <Button variant="primary">Ver</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))        
        )
    }


}

/*

<ul>
          { this.state.persons.map(person => <li>{person.name}</li>)}
        </ul>

const arrayPlantillas = [
    { id: 1, src: Plantilla1, titulo: "Plantilla Nice", descripcion: "Personaliza la Plantilla Nice" },
    { id: 2,  src: Plantilla2, titulo: "Plantilla Hot", descripcion: "Personalizar la Plantilla Hot" },
];
  
const PlantillasList = () => {
    
    axios.get(`https://jsonplaceholder.typicode.com/users`)
    .then(res => {
      console.log(res);
      //const persons = res.data;
      //this.setState({ persons });
    })

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

*/